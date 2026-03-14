ServerEvents.recipes(event => {
  const blocks = {
    'irons_spellbooks:brazier': {
      temperature: 2000,
      thermalResistance: 5000,
      heatCapacity: 10000,
      transforms: { cold: 'irons_spellbooks:brazier[lit=false]' },
      predicates: { lit: 'true' }
    },
    'irons_spellbooks:brazier_soul': {
      temperature: 2000,
      thermalResistance: 2500,
      heatCapacity: 10000,
      transforms: { cold: 'irons_spellbooks:brazier_soul[lit=false]' },
      predicates: { lit: 'true' }
    },
  };

  Object.entries(blocks).forEach(([block, props]) => {
    event.custom({
      type: 'pneumaticcraft:heat_properties',
      block: block,
      temperature: props.temperature,
      thermalResistance: props.thermalResistance,
      heatCapacity: props.heatCapacity,
      transforms: props.transforms,
      predicates: props.predicates
    }).id(`craftoria:pneumaticcraft/heat_properties/${block.replace(':', '_')}`);
  });
});
