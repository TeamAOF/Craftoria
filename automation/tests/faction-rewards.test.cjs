const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../../kubejs/server_scripts/faction_quest_rewards.js'), 'utf8');
const registry = ['ae2:controller', 'create:shaft', 'ars_nouveau:book', 'minecraft:book', 'sophisticatedbackpacks:backpack',
  'sophisticatedbackpacks:iron_backpack', 'minecraft:air'];
const stack = id => ({ id, isEmpty: () => id === 'minecraft:air' });
const FILTER = 'ftbfiltersystem:smart_filter';
class ItemTask {
  // A single id is a plain item task; several ids model a smart filter matching exactly those items.
  constructor(...ids) { this.ids = ids; this.calls = 0; }
  getValidDisplayItems() { throw new Error('client-only: Attempted to load class net/minecraft/client/player/LocalPlayer'); }
  getItemStack() { this.calls++; return stack(this.ids.length === 1 ? this.ids[0] : FILTER); }
  test(candidate) { return this.ids.includes(candidate.id); }
}
const ItemMatchingSystem = { INSTANCE: { isItemFilter: item => item.id === FILTER } };
const BuiltInRegistries = { ITEM: { forEach: fn => registry.forEach(id => fn({ getDefaultInstance: () => stack(id) })) } };
const classes = { 'dev.ftb.mods.ftbquests.quest.task.ItemTask': ItemTask,
  'dev.ftb.mods.ftbquests.integration.item_filtering.ItemMatchingSystem': ItemMatchingSystem,
  'net.minecraft.core.registries.BuiltInRegistries': BuiltInRegistries };
function setup() {
  let validator, clear; const warnings = []; const membership = new Map();
  const factions = { science: { id: 'science', sharedGroups: ['shared'] }, magic: { id: 'magic', sharedGroups: [] } };
  const parties = { managed: true, active: () => parties.managed,
    manager: () => ({ getTeamForPlayerID: uuid => ({ orElse: () => membership.get(uuid) }) }), faction: team => factions[team] };
  const context = vm.createContext({ console: { warn: message => warnings.push(message), error: message => warnings.push(message) },
    Java: { loadClass: name => classes[name] }, factionParties: parties,
    factionRecipeOverrides: { publicQuestItems: ['ars_nouveau:experience_gem', 'ars_nouveau:greater_experience_gem', 'ars_technica:giant_experience_gem', 'ars_technica:gargantuan_experience_gem'] },
    factionDefinitions: { restrictions: { science: ['ae2'], magic: ['ars_nouveau'], shared: ['create'] } },
    FactionGuard: { setRewardValidator: fn => { validator = fn; }, setQuestCacheListener: fn => { clear = fn; } } });
  vm.runInContext(source, context);
  const quest = (id, ...tasks) => ({ getId: () => id, getTasks: () => tasks });
  const reward = quest => ({ getQuest: () => quest });
  return { membership, parties, warnings, quest, reward, allowed: (...args) => validator(...args), clear: () => clear() };
}
test('exclusive and shared item requirements follow current membership, including offline players', () => {
  const s = setup(); s.membership.set('p', 'science');
  for (const [item, expected] of [['ae2:controller', true], ['create:shaft', true], ['ars_nouveau:book', false], ['minecraft:diamond', true], ['other:item', true]]) {
    assert.equal(s.allowed('p', s.reward(s.quest(item, new ItemTask(item)))), expected);
  }
  s.membership.set('p', 'magic'); assert.equal(s.allowed('p', s.reward(s.quest('transfer', new ItemTask('ae2:controller')))), false);
});
test('any inaccessible task denies all quest rewards; alternatives permit an accessible item', () => {
  const s = setup(); s.membership.set('p', 'science');
  assert.equal(s.allowed('p', s.reward(s.quest(1, new ItemTask('ae2:controller'), new ItemTask('ars_nouveau:book')))), false);
  assert.equal(s.allowed('p', s.reward(s.quest(2, new ItemTask('ars_nouveau:book', 'minecraft:book')))), true);
  assert.equal(s.allowed('p', s.reward(s.quest(3, new ItemTask('ars_nouveau:book', 'ars_nouveau:gem')))), false);
  assert.equal(s.allowed('p', s.reward(s.quest(4, {}))), true);
});
test('unaffiliated players cannot claim restricted quests, while legacy worlds are unchanged', () => {
  const s = setup(); const reward = s.reward(s.quest(1, new ItemTask('ae2:controller')));
  assert.equal(s.allowed('none', reward), false); s.parties.managed = false; assert.equal(s.allowed('none', reward), true);
});
test('filter enumeration is cached and invalidated on quest reload; unresolved filters warn once', () => {
  const s = setup(); s.membership.set('p', 'science'); const task = new ItemTask('ae2:controller'); const q = s.quest(1, task);
  s.allowed('p', s.reward(q)); s.allowed('p', s.reward(q)); assert.equal(task.calls, 1);
  task.ids = ['ars_nouveau:book']; s.clear(); assert.equal(s.allowed('p', s.reward(q)), false); assert.equal(task.calls, 2);
  const unresolved = s.reward(s.quest(2, new ItemTask('missing:a', 'missing:b')));
  assert.equal(s.allowed('p', unresolved), true); s.allowed('p', unresolved); assert.equal(s.warnings.length, 1);
});

test('generic XP gems permit quest rewards across factions without exempting other Ars tasks', () => {
  const s = setup(); s.membership.set('p', 'science');
  for (const item of ['ars_nouveau:experience_gem', 'ars_nouveau:greater_experience_gem',
    'ars_technica:giant_experience_gem', 'ars_technica:gargantuan_experience_gem']) {
    assert.equal(s.allowed('p', s.reward(s.quest(item, new ItemTask(item)))), true);
    assert.equal(s.allowed('none', s.reward(s.quest(item + '/none', new ItemTask(item)))), true);
  }
  assert.equal(s.allowed('p', s.reward(s.quest('ordinary', new ItemTask('ars_nouveau:book')))), false);
  assert.equal(s.allowed('p', s.reward(s.quest('mixed', new ItemTask('ars_nouveau:experience_gem'), new ItemTask('ars_nouveau:book')))), false);
});

test('smart filters resolve on the server without the client-only display path', () => {
  const s = setup(); s.membership.set('p', 'science');
  const backpack = s.quest('backpack', new ItemTask('sophisticatedbackpacks:backpack', 'sophisticatedbackpacks:iron_backpack'));
  assert.equal(s.allowed('p', s.reward(backpack)), true);
  assert.equal(s.allowed('p', s.reward(s.quest('mixed-filter', new ItemTask('ars_nouveau:book', 'ae2:controller')))), true);
  assert.equal(s.allowed('p', s.reward(s.quest('magic-filter', new ItemTask('ars_nouveau:book', 'minecraft:air')))), false);
});

test('a failing reward check delivers the reward instead of crashing the server tick', () => {
  const s = setup(); s.membership.set('p', 'science');
  const broken = { getQuest: () => { throw new Error('boom'); } };
  assert.equal(s.allowed('p', broken), true);
  assert.ok(s.warnings.some(message => message.includes('boom')));
});
