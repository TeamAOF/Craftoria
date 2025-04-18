---
navigation:
  title: 'Drone'
  icon: 'pneumaticcraft:drone'
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:drone
---

# Drone

Drones are powerful programmable flying robots, which can be used for all sorts of automation. They need programming before they'll do anything; for this you'll also need a [Programmer](../programming/programmer.md) and some [Puzzle Pieces](../programming/puzzle_pieces.md).

When you place down a programmed and [pressurized](../base_concepts/pressure.md) Drone, it'll perform its programmed tasks.

## pneumaticcraft:drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:drone" y={-0.3} />
</GameScene>

<a name="charging"></a>

## Automatic Charging

Drones are smart: when they're low on air, they'll stop their main program and search for a [Charging Station](../machines/charging_station.md) that has a [Dispenser Upgrade](../base_concepts/upgrades.md#dispenser) and at least 1 bar of pressure, closer than <Color id='dark_purple'>$(t:See 'max_drone_charging_station_search_range' in mod config)80 blocks$(/t:See 'max_drone_charging_station_search_range' in mod config)</Color> away.

When found, the _Drone_ will go to this _Charging Station_ and will sit charging until the station can't supply any more air. After that, the _Drone_ will resume its main program.

## Automatic Charging (cont.)

On a multiplayer server you might want to only allow your Drones to charge on your Charging Station(s). You can make your _Charging Station_ private by covering it by a [Security Station](../machines/security_station.md).

Now only the _Drones_ placed by players who are whitelisted in your _Security Station_ will be allowed to charge.

When the _Drone_'s air runs out, its propellers will stop and it will fall straight to the ground. Beware: drones can take fall damage! A destroyed _Drone_ will drop itself in item form.

You can dye a _Drone_ by crafting it with a piece of _dye_. You can also dye a _Drone_ in-world, by _right-clicking_ it with a piece of _dye_. This coloring is just cosmetic but can help to distinguish drones at a glance.

## Debugging

Hmm, why does that _Drone_ act like it does? Why doesn't it do anything at all? You can debug your program by using a [Pneumatic Helmet](../armor/pneumatic_helmet.md), with [Dispenser](../base_concepts/upgrades.md#dispenser) and [Entity Tracker](../base_concepts/upgrades.md#entity_tracker) Upgrades installed. With the _Drone_ targeted and the _Entity Tracker_ active, press the _$(k:pneumaticcraft.helmet.debugging.drone)$(/k:pneumaticcraft.helmet.debugging.drone)_ key. Then, opening the _Drone Debugger_ page in the Pneumatic Armor GUI will show that drone's program, including the current widget and any errors.

## Debugging (cont.)

There are a couple of other little tricks to be aware of:

- Right-clicking a Drone with a [GPS Tool](./gps_tool.md) makes it go to the GPS Tool's stored blockpos; may be useful to test Drone pathing.
- Hacking a Drone (using the [Security Upgrade](../base_concepts/upgrades.md#security) in the Pneumatic Helmet) makes it suspend its program and come to you; useful if its program has left it in a hard-to-reach spot. Hacking it again will resume the program.

Crafting a Drone

<Recipe id="pneumaticcraft:drone" />
