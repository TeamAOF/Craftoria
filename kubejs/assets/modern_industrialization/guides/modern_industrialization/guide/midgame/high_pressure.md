---
navigation:
  parent: midgame/midgame.md
  title: High Pressure!
  icon: pressurizer
  position: 202

item_ids:
  - pressurizer
  - high_pressure_large_steam_boiler
  - large_steam_turbine
  - heat_exchanger
  - hv_steam_turbine
---

# High Pressure!

<Row>
  <GameScene zoom="2" interactive={true}>
    <ImportStructure src='../assets/structures/pressurizer.snbt' />
  </GameScene>
  <GameScene zoom="2" interactive={true}>
    <ImportStructure src='../assets/structures/high_pressure_large_steam_boiler.snbt' />
  </GameScene>
  <GameScene zoom="2" interactive={true}>
    <ImportStructure src='../assets/structures/large_steam_turbine.snbt' />
  </GameScene>
  <GameScene zoom="2" interactive={true}>
    <ImportStructure src='../assets/structures/heat_exchanger.snbt' />
  </GameScene>
</Row>

## Pressurizer, High Pressure Large Steam Boiler, Large Steam Turbine, Heat Exchanger

<Row>
  <Recipe id="modern_industrialization:electric_age/machine/pressurizer_asbl" />
  <Recipe id="modern_industrialization:electric_age/machine/high_pressure_large_steam_boiler_asbl" />
  <Recipe id="modern_industrialization:electric_age/machine/large_steam_turbine_asbl" />
  <Recipe id="modern_industrialization:electric_age/machine/heat_exchanger_asbl" />
</Row>

### Pressurizer

The Pressurizer is a new multiblock made of titanium that can turn water into HP (high pressure) water, steam into HP steam, and the other way around.

### High Pressure Large Steam Boiler

Once you have access to HP water, you can use a High Pressure Large Steam Boiler to produce HP steam.

One millibucket of HP steam is worth 8 mb of regular steam, that is 8 EU.

### Large Steam Turbine

A Large Steam Turbine will accept both regular steam (1 mb = 1 EU) and HP steam (1 mb = 8 EU) into EU, and will generate up to 16384 EU/t!

However it will not give you back regular nor HP water.

### Heat Exchanger

Remember that pressurizing water into HP water costs a lot of energy, but the turbine will not give it back! You can use a Heat Exchanger to recover the HP water for another cycle.

### HV Steam Turbine

<Recipe id="modern_industrialization:electric_age/machine/hv_steam_turbine_asbl" />

Another option for small setups is to use an HV steam turbine. Like other HV generators, it will produce 512 EU/t. This one will only accept regular steam.
