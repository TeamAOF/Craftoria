ClientEvents.lang('en_us', e => {
  /** @type {Object.<Special.LangKey, string>} */
  let langEntries = {};

  // Adding custom MI machines to lang entries
  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    let langKey = `${machine.mod ?? 'modern_industrialization'}.${id}`;
    if (machine.lang) {
      for (let [key, value] of Object.entries(machine.lang)) {
        langEntries[`${key}.${langKey}`] = value;
      }
    } else {
      langEntries[`block.${langKey}`] = machine.name ?? toMcCase(id);
      let category = `${machine.name ?? toMcCase(id)}`;
      // console.log(`Adding rei_categories.${langKey} -> ${category}`);
      langEntries[`rei_categories.${langKey}`] = category;
      if (machine.mod === 'mi_tweaks') langEntries[`rei_categories.modern_industrialization.${id}`] = category;
    }
  }

  for (let [id, hatch] of Object.entries(global.customMIHatches)) {
    let { name, types } = hatch;
    let key = `block.modern_industrialization.${id}`;

    Object.keys(types).forEach(type => {
      ['input', 'output'].forEach(io => {
        let langKey = `${key}_${type}_${io}_hatch`;
        langEntries[langKey] = toMcCase(`${name} ${type} ${io} Hatch`);
      });
    });
  }

  for (const [k, v] of Object.entries(langEntries)) {
    /** @type {Array<string>} */
    let langParts = k.split('.');
    let mod = langParts.find(part => global.modList.contains(part));
    // console.log(`${mod} ${k} -> ${v}`);
    e.add(mod, k, v);
  }
});
