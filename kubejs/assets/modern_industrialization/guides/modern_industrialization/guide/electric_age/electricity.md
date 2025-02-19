---
navigation:
  parent: electric_age/index.md
  title: Electricity
  icon: lv_steam_turbine
  position: 4

item_ids:
  - lv_steam_turbine
---

# Electricity

## LV Steam Turbine

<Recipe id="modern_industrialization:electric_age/machine/lv_steam_turbine_asbl" />

The Steam Turbine uses Steam to produce electricity. It converts every mb of Steam to 1 EU, up to 32 mb converted every tick.

The Steam Turbine will automatically send electricity to any machine connected directly to its output side.
It will only connect to cables placed on its output side. It has the Low Voltage (LV) [Tier]().

## LV Diesel Generator

<Recipe id="modern_industrialization:electric_age/machine/lv_diesel_generator_asbl" />

The Diesel Generator is an alternative to the Steam Turbine. It uses various fuels to produce electricity.
For now, you can burn Creosote. (See EMI for the list of burnable fuels).

## Cables

Every electric cable has a Tier which determines how many EU/t it can transfer and to which machines it can connect. Copper, Silver and Tin are LV, Cupronickel and Electrum are MV, and so on...

Cable networks have limitations on the amount of energy they will pull into the network: at most 256 EU/t for LV cables, 1024 EU/t for MV cables and 8192 EU/t for HV cables. Because there is no output limit for the network and because cables have a small internal storage, an LV network can provide more than 256 EU/t for a short amount of time.

Note however that single block electric machines will only connect to LV cables!

## Transformers

To transfer more energy, you need to either create multiple cable networks or use Transformers.
A low tier to high tier Transformer (for example LV to MV) has 5 inputs and 1 output. A high tier to low tier (for example MV to LV) Transformer has 1 input and 5 outputs.

<Row>
  <Recipe id="modern_industrialization:electric_age/transformer/lv_mv/up_asbl" />
  <Recipe id="modern_industrialization:electric_age/transformer/lv_mv/down_asbl" />
</Row>
