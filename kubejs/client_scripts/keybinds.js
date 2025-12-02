// requires: keybindjs
KeyBindJSEvents.modify(event => {
  const none = GLFW.GLFW_KEY_UNKNOWN;
  /**
   * Keybinds to modify. All values are optional, but at least one must be set.
   * @type {Object.<string, {key?: number, modifier?: $KeyModifier_, category?: string, mod?: Special.Mod, remove?: boolean}>}
   * - string: The keybind to modify.
   * - key: The key for the bind. (GLFW key code)
   * - modifier: The modifier for the bind. ("control"| "shift" | "alt" | "none")
   * - category: The category for the bind. (e.g. "key.categories.movement")
   * - mod: Used for overriding the mod to check for. (e.g. "minecraft", "the_bumblezone", etc.)
   * - remove: Whether to remove the keybind. (true|false)
   */
  const keys = {
    // Movement
    'key.the_bumblezone.beehemoth_up': { category: 'key.categories.movement' },
    'key.the_bumblezone.beehemoth_down': { category: 'key.categories.movement' },
    'key.modern_industrialization.toggle_flight': { category: 'key.categories.movement' },

    // Creative Mode
    'key.loadToolbarActivator': { key: none, mod: 'minecraft' },
    'key.saveToolbarActivator': { key: none, mod: 'minecraft' },

    // Multiplayer
    'key.command': { key: none, mod: 'minecraft' },
    'key.socialInteractions': { key: none, mod: 'minecraft' },
    'key.showcaseitem.showcaseitem': { key: GLFW.GLFW_KEY_T, modifier: 'shift', category: 'key.categories.multiplayer' },
    Toggle: { key: GLFW.GLFW_KEY_U, category: 'key.categories.multiplayer', mod: 'chattoggle' },

    // Miscellaneous
    'key.toastcontrol.clear': { category: 'key.categories.misc' },
    'key.stickit.place': { category: 'key.categories.misc' },
    'desc.seasonhud.keybind.options': { key: none, category: 'key.categories.misc' },
    'key.puffish_skills.open': { category: 'key.categories.misc' },
    'key.lighty.enable': { key: GLFW.GLFW_KEY_F8, category: 'key.categories.misc' },
    'key.lighty.toggle': { key: GLFW.GLFW_KEY_F7, category: 'key.categories.misc' },
    'key.open_muffler_gui': { category: 'key.categories.misc', mod: 'extremesoundmuffler' },

    // Building
    // 'key.bridgingmod.toggle_bridging': { category: 'category.craftoria.building' },

    // Tools
    'mininggadgets.text.open_gui': { category: 'category.craftoria.tools' },
    'justdirethings.key.toolUI': { category: 'category.craftoria.tools' },
    'justdirethings.key.toggle_tool': { category: 'category.craftoria.tools' },
    'key.modern_industrialization.toggle_3x3': { category: 'category.craftoria.tools' },

    // Applied Energistics 2
    'key.extendedae.viewpattern': { key: none, category: 'key.ae2.category' },

    // Guides
    'key.guideme.guide': { category: 'category.craftoria.guides' },
    'ponder.keyinfo.ponder': { category: 'category.craftoria.guides' },
    'keybind.advancedperipherals.description': { category: 'category.craftoria.guides' },
    'key.ars_nouveau.open_documentation': { category: 'category.craftoria.guides' },
    'key.openManual': { category: 'category.craftoria.guides', mod: 'mcjtylib' },

    // Curios
    'key.curios.open.desc': { key: none },
    'key.hostilenetworks.open_deep_learner': { key: none, category: 'key.curios.category' },
    'simplemagnets.keys.toggle': { modifier: 'shift', category: 'key.curios.category' },
    'keybind.reliquary.fortune_coin': { key: none, category: 'key.curios.category' },
    'key.actualladditions.crafting_stick_open.desc': { key: none, category: 'key.curios.category', mod: 'actuallyadditions' },
    'key.ars_nouveau.head_curio_hotkey': { key: none, category: 'key.curios.category' },
    'key.ars_elemental.open_pouch': { key: none, category: 'key.curios.category' },
    'supplementaries.keybind.quiver': { key: none, category: 'key.curios.category' },

    // Placebo
    'placebo.toggleTrails': { key: none },
    'placebo.toggleWings': { key: none },

    // FTB
    'key.ftbchunks.claim_manager': { category: 'category.craftoria.ftb' },
    'key.ftbchunks.map': { key: none, category: 'category.craftoria.ftb', remove: true},
    'key.ftbchunks.add_waypoint': { category: 'category.craftoria.ftb' },
    'key.ftbchunks.toggle_minimap': { category: 'category.craftoria.ftb' },
    'key.ftbchunks.waypoint_manager': { category: 'category.craftoria.ftb' },
    'key.ftbchunks.minimap.zoomIn': { category: 'category.craftoria.ftb' },
    'key.ftbchunks.minimap.zoomOut': { category: 'category.craftoria.ftb' },
    'key.ftbquests.quests': { category: 'category.craftoria.ftb' },
    'key.ftbteams.open_gui': { category: 'category.craftoria.ftb' },

    // Jade
    'key.jade.narrate': { key: none },
    'key.jade.config': { key: none },
    'key.jade.show_overlay': { key: none },
    'key.jade.show_recipes': { key: none },
    'key.jade.show_uses': { key: none },
    'key.jade.toggle_liquid': { key: none },

    // Mekanism
    'key.gmut.vertical_speed': { category: 'constants.mekanism.mod_name' },

    // SFM
    'key.sfm.item_inspector.activation_key': { key: none },

    // Sophisticated Backpacks
    'keybind.sophisticatedbackpacks.toggle_upgrade_1': { key: none, modifier: 'none' },
    'keybind.sophisticatedbackpacks.toggle_upgrade_2': { key: none, modifier: 'none' },
    'keybind.sophisticatedstorage.sort': { category: 'keybind.sophisticatedbackpacks.category' },

    // Iris
    'iris.keybind.reload': { key: none },
    'iris.keybind.shaderPackSelection': { key: none },
    'iris.keybind.toggleShaders': { key: none },

    // FramedBlocks
    'framedblocks.key.wipe_cache': { key: none },

    // Voice Mod
    'key.mute_microphone': { key: none, mod: 'voicechat', remove: true},

    // Removed keybinds
    'key.apotheosis.compare_equipment': { remove: true },
    'key.apotheosis.link_item_to_chat': { remove: true },
    'key.modmenu.open_menu': { remove: true, mod: 'mod_menu' },
    'key.modernfix.config': { remove: true },
    'artifacts.key.night_vision_goggles.toggle': { remove: true },
    'artifacts.key.helium_flamingo.activate': { remove: true },
    'artifacts.key.universal_attractor.toggle': { remove: true },
    'artifacts.key.charm_of_shrinking.toggle': { remove: true },
    'key.kubejs.kubedex': { remove: true },
    'nolijium.toggle_light_level_overlay': { remove: true },
  };

  for (let [k, v] of Object.entries(keys)) {
    /** @type {Array<string>} */
    let keyParts = k.split('.');
    let mod = v.mod ?? keyParts.find(part => global.modList.contains(part));

    // Skip if the mod is not loaded, to avoid errors.
    if (!Platform.isLoaded(mod)) {
      console.warn(`Skipping: ${k} -> ${JSON.stringify(v)} (${mod} not loaded)`);
      continue;
    }

    // Skip if the keybind doesn't exist but the mod is present
    if (KeyBindUtil.findKeyMappingInAllKeyMapping(k) == null) {
      console.warn(`Skipping: ${k} -> ${JSON.stringify(v)} (Keybinding not found)`);
      continue;
    }

    try {
      if (!v.remove) {
        if (v.key) event.modifyKey(k, v.key);
        if (v.modifier) event.modifyModifier(k, v.modifier);
        if (v.category) event.modifyCategory(k, v.category);
      } else event.remove(k);
    } catch (e) {
      // unknown error case.
      // This keybinding script isnt critical so we dont want to stop client loading
      console.warn(`Unable to fully modify Keybind ${k} due to error: ${e.message}`);
    }
  }
});
