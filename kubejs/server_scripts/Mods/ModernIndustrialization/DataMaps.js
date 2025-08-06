ServerEvents.generateData('after_mods', e => {
  e.json('extended_industrialization:data_maps/block/large_electric_furnace_tier', {
    values: {
      'modern_industrialization:superconductor_coil': {
        batch_size: 256,
        eu_cost_multiplier: 0.25,
      },
    },
  });

  e.json('industrialization_overdrive:data_maps/block/pyrolyse_oven_tier', {
    values: {
      'modern_industrialization:superconductor_coil': {
        batch_size: 128,
        eu_cost_multiplier: 0.5,
      },
    },
  });

  e.json('mi_tweaks:data_maps/item/water_explosive', {
    values: {
      'modern_industrialization:sodium_dust': {
        strength: 3,
        fire: false,
      },
      'modern_industrialization:sodium_block': {
        strength: 9,
        fire: false,
      },
      'modern_industrialization:sodium_tiny_dust': {
        strength: 1,
        fire: false,
      },
    },
  });

  e.json('modern_industrialization:data_maps/fluid/fluid_fuels', {
    values: {
      'justdirethings:refined_t4_fluid_source': {
        eu_per_mb: 2592
      },
      'justdirethings:refined_t3_fluid_source': {
        eu_per_mb: 864
      },
      'justdirethings:refined_t2_fluid_source': {
        eu_per_mb: 288
      },
    }
  });
});
