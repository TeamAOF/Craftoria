// priority: -1100
const $EnchHooks = Java.loadClass('dev.shadowsoffire.apothic_enchanting.asm.EnchHooks');
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries');
const enchBooksToKeep = [];
Registry.access().access().lookupOrThrow($Registries.ENCHANTMENT).listElements().forEach(ench => {
  enchBooksToKeep.push(`minecraft:enchanted_book[stored_enchantments={levels:{"${ench.key().location()}":${$EnchHooks.getMaxLevel(ench)}}}]`);
});


RecipeViewerEvents.removeEntries('item', event => {
  /** @type {Special.Item[]} */
  let hideItems = [
    'rep_ae2_bridge:earth',
    'rep_ae2_bridge:nether',
    'rep_ae2_bridge:organic',
    'rep_ae2_bridge:ender',
    'rep_ae2_bridge:metallic',
    'rep_ae2_bridge:precious',
    'rep_ae2_bridge:living',
    'rep_ae2_bridge:quantum',
    'createstockbridge:request_pattern',
    'xycraft_core:errored',
    'databank:megastructure_save',
    'ftblibrary:icon_item',
    'stickit:placed_items',
    /naquadah/,
  ];

  hideItems.forEach(item => {
    event.remove(item);
  });

  event.remove(Ingredient.of('enchanted_book').except(enchBooksToKeep));

  // Sophisticated Storage cleanup
  const storageTiers = ['copper', 'iron', 'gold', 'diamond', 'netherite'];
  const woodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'];
  const limitedTiers = 4;

  const storageToKeep = [];

  // For barrels and chests: keep all tiers of each wood type
  const woodedStorage = ['sophisticatedstorage:barrel', 'sophisticatedstorage:chest'];
  woodedStorage.forEach(storageType => {
    woodTypes.forEach(wood => {
      // Base wood variant
      storageToKeep.push(`${storageType}[sophisticatedstorage:wood_type="${wood}"]`);

      // Tiered wood variants
      storageTiers.forEach(tier => {
        storageToKeep.push(`sophisticatedstorage:${tier}_${storageType.split(':')[1]}[sophisticatedstorage:wood_type="${wood}"]`);
      });
    });

  });

  // Limited variants with wood types
  for (let i = 1; i <= limitedTiers; i++) {
    woodTypes.forEach(wood => {
      storageToKeep.push(`sophisticatedstorage:limited_barrel_${i}[sophisticatedstorage:wood_type="${wood}"]`);
      storageTiers.forEach(tier => {
        storageToKeep.push(`sophisticatedstorage:limited_${tier}_barrel_${i}[sophisticatedstorage:wood_type="${wood}"]`);
      });
    });
  }

  // Remove only the storage items we don't want to keep
  const allStorageItems = [];

  // Add base storage items
  const baseStorageTypes = ['barrel', 'chest'];
  baseStorageTypes.forEach(type => {
    allStorageItems.push(`sophisticatedstorage:${type}`);

    // Add tiered variants
    storageTiers.forEach(tier => {
      allStorageItems.push(`sophisticatedstorage:${tier}_${type}`);
    });
  });

  // Add limited variants
  for (let i = 1; i <= limitedTiers; i++) {
    allStorageItems.push(`sophisticatedstorage:limited_barrel_${i}`);
    storageTiers.forEach(tier => {
      allStorageItems.push(`sophisticatedstorage:limited_${tier}_barrel_${i}`);
    });
  }

  allStorageItems.forEach(storageType => {
    event.remove(Ingredient.of(storageType).except(storageToKeep));
  });

  const applyColors = (item, color, color2) => {
    return Ingredient.of(`${item}[sophisticatedcore:main_color=${color},sophisticatedcore:accent_color=${color2 || color}]`);
  };

  // Special handling for shulker boxes & backpacks
  let DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');
  DyeColor.values().forEach(color => {
    let textureDiffuseColor = color.getTextureDiffuseColor();
    event.remove(applyColors('sophisticatedstorage:shulker_box', textureDiffuseColor));
    event.remove(applyColors('sophisticatedbackpacks:backpack', textureDiffuseColor));
    storageTiers.forEach(tier => {
      event.remove(applyColors(`sophisticatedstorage:${tier}_shulker_box`, textureDiffuseColor));
    });
  });
  event.remove('sophisticatedbackpacks:backpack[sophisticatedcore:main_color=-3087822,sophisticatedcore:accent_color=-13881243]');

  const YELLOW = DyeColor.YELLOW.getTextureDiffuseColor();
  const LIME = DyeColor.LIME.getTextureDiffuseColor();

  // Remove specific shulker boxes
  event.remove(applyColors('sophisticatedstorage:shulker_box', YELLOW, LIME));
  storageTiers.forEach(tier => {
    event.remove(applyColors(`sophisticatedstorage:${tier}_shulker_box`, YELLOW, LIME));
  });
});

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  ['apothic_attributes:extra_long_flying', 'apothic_attributes:long_flying', 'apothic_attributes:flying'].forEach(potion => {
    event.remove([
      Ingredient.of(`minecraft: potion[potion_contents = { potion: "${potion}" }]`),
      Ingredient.of(`minecraft: splash_potion[potion_contents = { potion: "${potion}" }]`),
      Ingredient.of(`minecraft: lingering_potion[potion_contents = { potion: "${potion}" }]`),
      Ingredient.of(`minecraft: tipped_arrow[potion_contents = { potion: "${potion}" }]`),
      Ingredient.of(`apotheosis: potion_charm[potion_contents = { potion: "${potion}" }]`),
    ]);
  });

  const globalRemovals = globalItemRemovals.map(item => {
    if (typeof item === 'object') return item.item;
    return item;
  });
  event.remove(globalRemovals);

  disabledItems.forEach(item => {
    event.remove(item.id);
  });

  event.remove(Ingredient.of('@displaydelight').except(['displaydelight:food_plate', 'displaydelight:small_food_plate']));
});

RecipeViewerEvents.removeCategories(e => {
  e.remove(['chisel:chisel_recipes_category', 'modern_industrialization:replicator_1']);
});
