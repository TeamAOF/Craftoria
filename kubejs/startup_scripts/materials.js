const mekMaterials = [
  { name: 'zinc', color: '#b9e9c1', dust: true },
];

global.mekMaterials = mekMaterials;

StartupEvents.registry('item', event => {
  const types = ['crystal', 'shard', 'clump', 'dirty_dust'];
  const makeMaterial = (name, color) => {
    types.forEach(type => {
      let itemId = type === 'dirty_dust' ? `craftoria:dirty_${name}_dust` : `craftoria:${name}_${type}`;

      let item = event.create(itemId)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/${type}`)
        .texture('layer2', `mekanism:item/${type}_overlay`)
        .color(1, color)
        .tag(`mekanism:${type}s`)
        .tag(`c:${type}s/${name}`);

      if (type === 'dirty_dust') {
        item.texture('layer3', `mekanism:item/${type}_overlay2`);
      }
    });
  };

  mekMaterials.forEach(material => {
    makeMaterial(`${material.name}`, material.color);

    if (material.dust) {
      event.create(`craftoria:${material.name}_dust`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', 'mekanism:item/dust')
        .color(1, material.color)
        .tag('c:dusts')
        .tag(`c:dusts/${material.name}`);
    }
  });
});

StartupEvents.registry('mekanism:chemical', event => {
  mekMaterials.forEach(material => {
    event.create(`craftoria:clean_${material.name}_slurry`, 'clean_slurry').tint(Color.of(material.color).rgb).ore(`c:ores/${material.name}`);
    event.create(`craftoria:dirty_${material.name}_slurry`, 'dirty_slurry').tint(Color.of(material.color).rgb).ore(`c:ores/${material.name}`);
  });
});
