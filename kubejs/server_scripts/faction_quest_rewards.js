// priority: 4
// Quest progress remains shared; inaccessible reward claims are consumed without delivery.
const FactionItemTask = Java.loadClass('dev.ftb.mods.ftbquests.quest.task.ItemTask');
const FactionItemMatching = Java.loadClass('dev.ftb.mods.ftbquests.integration.item_filtering.ItemMatchingSystem');
const FactionItemRegistry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const factionQuestRewards = {
  cache: new Map(),
  warned: new Set(),
  candidates: null,
  modStages: (() => {
    let result = Object.create(null);
    Object.keys(factionDefinitions.restrictions).forEach(stage => {
      factionDefinitions.restrictions[stage].forEach(mod => { result[mod] = stage; });
    });
    return result;
  })(),
  clear() { this.cache.clear(); this.warned.clear(); },
  warnOnce(id, message) {
    if (this.warned.has(id)) return;
    console.warn('[Faction quests] ' + message);
    this.warned.add(id);
  },
  // Every registered item's default stack; the item registry is frozen after startup.
  allStacks() {
    if (!this.candidates) {
      let stacks = [];
      FactionItemRegistry.ITEM.forEach(item => {
        let stack = item.getDefaultInstance();
        if (!stack.isEmpty()) stacks.push(stack);
      });
      this.candidates = stacks;
    }
    return this.candidates;
  },
  // Server-safe replacement for ItemTask.getValidDisplayItems(): FTB Quests resolves smart filters through the
  // client-only creative search tab (FTBQuestsClient/LocalPlayer), which hard-crashes a dedicated server.
  matchingStacks(task) {
    let item = task.getItemStack();
    if (item.isEmpty()) return [];
    if (!FactionItemMatching.INSTANCE.isItemFilter(item)) return [item];
    return this.allStacks().filter(stack => task.test(stack));
  },
  requirements(quest) {
    let id = String(quest.getId());
    if (this.cache.has(id)) return this.cache.get(id);
    let tasks = [];
    quest.getTasks().forEach(task => {
      if (!(task instanceof FactionItemTask)) return;
      let choices = new Set();
      try {
        this.matchingStacks(task).forEach(stack => {
          let item = String(stack.id);
          choices.add(factionRecipeOverrides.publicQuestItems.includes(item) ? '' : item.split(':')[0]);
        });
      } catch (error) {
        this.warnOnce(id, 'Could not resolve items for quest ' + id + ' (' + error + '); this task is unrestricted');
        return;
      }
      if (!choices.size || choices.has('ftbfiltersystem')) {
        this.warnOnce(id, 'Unresolved item filter in quest ' + id + '; this task is unrestricted');
        return;
      }
      tasks.push(Array.from(choices).map(mod => this.modStages[mod] || ''));
    });
    this.cache.set(id, tasks);
    return tasks;
  },
  allowed(uuid, reward) {
    if (!factionParties.active()) return true;
    let team = factionParties.manager().getTeamForPlayerID(uuid).orElse(null);
    let faction = factionParties.faction(team);
    let stages = faction ? [faction.id].concat(faction.sharedGroups) : [];
    return this.requirements(reward.getQuest()).every(options => options.some(stage => !stage || stages.includes(stage)));
  },
};
// The validator runs inside FTB Quests' reward claim on the server tick; an uncaught script error there stops the
// server, so a failure delivers the reward instead of crashing everyone.
FactionGuard.setRewardValidator((uuid, reward) => {
  try {
    return factionQuestRewards.allowed(uuid, reward);
  } catch (error) {
    console.error('[Faction quests] Reward check failed; delivering reward: ' + error);
    return true;
  }
});
FactionGuard.setQuestCacheListener(() => factionQuestRewards.clear());
