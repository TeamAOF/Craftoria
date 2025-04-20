// requires: keybindjs
KeyBindJSEvents.modify(event => {
  const none = GLFW.GLFW_KEY_UNKNOWN;
  /**
   * Put your keybinds here.
   * @type {Object.<string, {key?: number, modifier?: $KeyModifier_, category?: string}>}
   */
  const keys = {
    // Movement
    'key.the_bumblezone.beehemoth_up': { category: 'key.categories.movement' },
    'key.the_bumblezone.beehemoth_down': { category: 'key.categories.movement' },

    // Inventory
    'key.trashslot.toggle': { key: GLFW.GLFW_KEY_PERIOD, category: 'key.categories.inventory', mod: 'minecraft' },
    'key.trashslot.toggle_lock': { category: 'key.categories.inventory', mod: 'minecraft' },
    'key.trashslot.delete': { category: 'key.categories.inventory', mod: 'minecraft' },
    'key.trashslot.delete_all': { category: 'key.categories.inventory', mod: 'minecraft' },

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
    // 'key.modern_industrialization.toggle_3x3': { category: 'category.craftoria.tools' },

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

    // Deeper & Darker
    'key.deeperdarker.boost': { key: none },
    'key.deeperdarker.transmit': { key: none },

    // FTB
    'key.ftbchunks.claim_manager': { category: 'category.craftoria.ftb' },
    'key.ftbchunks.map': { category: 'category.craftoria.ftb' },
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

    // Removed keybinds
    'key.apotheosis.compare_equipment': { remove: true },
    'key.apotheosis.link_item_to_chat': { remove: true },
    'key.modmenu.open_menu': { remove: true, mod: 'mod_menu' },
    'key.modernfix.config': { remove: true },
    'artifacts.key.night_vision_goggles.toggle': { remove: true },
    'artifacts.key.helium_flamingo.activate': { remove: true },
    'artifacts.key.universal_attractor.toggle': { remove: true },
    'key.kubejs.kubedex': { remove: true },
    'nolijium.toggle_light_level_overlay': { remove: true },
  };

  for (let [k, v] of Object.entries(keys)) {
    /** @type {Array<string>} */
    let keyParts = k.split('.');
    let mod = v.mod ?? keyParts.find(part => global.modList.contains(part));
    let isModLoaded = global.modList.contains(mod);
    if (!isModLoaded) {
      // Skip if the mod is not loaded, to avoid errors.
      // console.log(`Skipping: ${k} -> ${v} (${mod} not loaded)`);
      continue;
    }

    if (!v.remove) {
      if (v.key) {
        // console.log(`Keybind: ${k} -> ${v.key}`);
        event.modifyKey(k, v.key);
      }
      if (v.modifier) {
        // console.log(`Keybind: ${k} -> ${v.modifier}`);
        event.modifyModifier(k, v.modifier);
      }
      if (v.category) {
        // console.log(`Keybind: ${k} -> ${v.category}`);
        event.modifyCategory(k, v.category);
      }
    } else {
      // console.log(`Keybind: ${k} -> removed`);
      event.remove(k);
    }
  }
});
