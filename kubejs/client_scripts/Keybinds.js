// requires: keybindjs
KeyBindJSEvents.modify(event => {
  /**
   * Put your keybinds here. If you want to remove a keybind, set it to null.
   * @type {Object.<string, {key?: number, modifier?: $KeyModifier_, category?: string}>}
   */
  const keys = {
    // Movement
    'key.the_bumblezone.beehemoth_up': { category: 'key.categories.movement' },
    'key.the_bumblezone.beehemoth_down': { category: 'key.categories.movement' },

    // Inventory
    'key.trashslot.toggle': { key: GLFW.GLFW_KEY_PERIOD, category: 'key.categories.inventory' },
    'key.trashslot.toggle_lock': { category: 'key.categories.inventory' },
    'key.trashslot.delete': { category: 'key.categories.inventory' },
    'key.trashslot.delete_all': { category: 'key.categories.inventory' },

    // Creative Mode
    'key.loadToolbarActivator': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.saveToolbarActivator': { key: GLFW.GLFW_KEY_UNKNOWN },

    // Multiplayer
    'key.command': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.socialInteractions': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.showcaseitem.showcaseitem': { key: GLFW.GLFW_KEY_T, modifier: 'shift', category: 'key.categories.multiplayer' },
    Toggle: { key: GLFW.GLFW_KEY_U, category: 'key.categories.multiplayer' },

    // Miscellaneous
    'key.toastcontrol.clear': { category: 'key.categories.misc' },
    'key.stickit.place': { category: 'key.categories.misc' },
    'desc.seasonhud.keybind.options': { key: GLFW.GLFW_KEY_UNKNOWN, category: 'key.categories.misc' },
    'key.puffish_skills.open': { category: 'key.categories.misc' },
    'key.lighty.enable': { key: GLFW.GLFW_KEY_F8, category: 'key.categories.misc' },
    'key.lighty.toggle': { key: GLFW.GLFW_KEY_F7, category: 'key.categories.misc' },
    'key.open_muffler_gui': { category: 'key.categories.misc' },

    // Ars Nouveau

    // Applied Energistics 2
    'key.extendedae.viewpattern': { key: GLFW.GLFW_KEY_UNKNOWN, category: 'key.ae2.category' },

    // Guides
    'key.guideme.guide': { category: 'category.craftoria.guides' },
    'ponder.keyinfo.ponder': { category: 'category.craftoria.guides' },
    'keybind.advancedperipherals.description': { category: 'category.craftoria.guides' },
    'key.ars_nouveau.open_documentation': { category: 'category.craftoria.guides' },

    // Curios
    'key.curios.open.desc': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.hostilenetworks.open_deep_learner': { key: GLFW.GLFW_KEY_UNKNOWN, category: 'key.curios.category' },
    'simplemagnets.keys.toggle': { modifier: 'shift', category: 'key.curios.category' },
    'keybind.reliquary.fortune_coin': { key: GLFW.GLFW_KEY_UNKNOWN, category: 'key.curios.category' },
    'key.actualladditions.crafting_stick_open.desc': { key: GLFW.GLFW_KEY_UNKNOWN, category: 'key.curios.category' },
    'key.ars_nouveau.head_curio_hotkey': { key: GLFW.GLFW_KEY_UNKNOWN, category: 'key.curios.category' },
    'key.ars_elemental.open_pouch': { key: GLFW.GLFW_KEY_UNKNOWN, category: 'key.curios.category' },

    // Placebo
    'placebo.toggleTrails': { key: GLFW.GLFW_KEY_UNKNOWN },
    'placebo.toggleWings': { key: GLFW.GLFW_KEY_UNKNOWN },

    // Deeper & Darker
    'key.deeperdarker.boost': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.deeperdarker.transmit': { key: GLFW.GLFW_KEY_UNKNOWN },

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
    'key.jade.narrate': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.jade.config': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.jade.show_overlay': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.jade.show_recipes': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.jade.show_uses': { key: GLFW.GLFW_KEY_UNKNOWN },
    'key.jade.toggle_liquid': { key: GLFW.GLFW_KEY_UNKNOWN },

    // Mekanism
    'key.gmut.vertical_speed': { category: 'constants.mekanism.mod_name' },

    // SFM
    'key.sfm.item_inspector.activation_key': { key: GLFW.GLFW_KEY_UNKNOWN },

    // Sophisticated Backpacks
    'keybind.sophisticatedbackpacks.toggle_upgrade_1': { key: GLFW.GLFW_KEY_UNKNOWN, modifier: 'none' },
    'keybind.sophisticatedbackpacks.toggle_upgrade_2': { key: GLFW.GLFW_KEY_UNKNOWN, modifier: 'none' },
    'keybind.sophisticatedstorage.sort': { category: 'keybind.sophisticatedbackpacks.category' },

    // Removed keybinds
    'key.apotheosis.compare_equipment': null,
    'key.apotheosis.link_item_to_chat': null,
    'key.modmenu.open_menu': null,
    'key.modernfix.config': null,
    'artifacts.key.night_vision_goggles.toggle': null,
    'artifacts.key.helium_flamingo.activate': null,
    'artifacts.key.universal_attractor.toggle': null,
    'key.kubejs.kubedex': null,
    'nolijium.toggle_light_level_overlay': null,
  };

  for (let [k, v] of Object.entries(keys)) {
    if (v != null) {
      if (v.key) {
        console.log(`Keybind: ${k} -> ${v.key}`);
        event.modifyKey(k, v.key);
      }
      if (v.modifier) {
        console.log(`Keybind: ${k} -> ${v.modifier}`);
        event.modifyModifier(k, v.modifier);
      }
      if (v.category) {
        console.log(`Keybind: ${k} -> ${v.category}`);
        event.modifyCategory(k, v.category);
      }
    } else {
      console.log(`Keybind: ${k} -> removed`);
      event.remove(k);
    }
  }
});
