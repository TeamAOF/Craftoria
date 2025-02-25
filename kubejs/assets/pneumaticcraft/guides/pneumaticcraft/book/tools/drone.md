---
navigation:
  title: "Drone"
  icon: "pneumaticcraft:drone[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:drone
---

# Drone

Drones are powerful programmable flying robots, which can be used for all sorts of automation. They need programming before they'll do anything; for this you'll also need a [Programmer](../programmer.md) and some [Puzzle Pieces](../puzzle_pieces.md).

When you place down a programmed and [pressurized](../pressure.md) Drone, it'll perform its programmed tasks.

## pneumaticcraft:drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:drone" y={-0.3} />
</GameScene>

<a name="charging"></a>
## Automatic Charging

Drones are smart: when they're low on air, they'll stop their main program and search for a [Charging Station](../charging_station.md) that has a [Dispenser Upgrade](../upgrades.md#dispenser) and at least 1 bar of pressure, closer than <Color hex="#880">$(t:See 'max_drone_charging_station_search_range' in mod config)80 blocks$(/t:See 'max_drone_charging_station_search_range' in mod config)</Color> away.

When found, the *Drone* will go to this *Charging Station* and will sit charging until the station can't supply any more air. After that, the *Drone* will resume its main program.

## Automatic Charging (cont.)

On a multiplayer server you might want to only allow your Drones to charge on your Charging Station(s). You can make your *Charging Station* private by covering it by a [Security Station](../security_station.md).

Now only the *Drones* placed by players who are whitelisted in your *Security Station* will be allowed to charge.

When the *Drone*'s air runs out, its propellers will stop and it will fall straight to the ground. Beware: drones can take fall damage! A destroyed *Drone* will drop itself in item form.

You can dye a *Drone* by crafting it with a piece of *dye*. You can also dye a *Drone* in-world, by *right-clicking* it with a piece of *dye*. This coloring is just cosmetic but can help to distinguish drones at a glance.

## Debugging

Hmm, why does that *Drone* act like it does? Why doesn't it do anything at all? You can debug your program by using a [Pneumatic Helmet](../pneumatic_helmet.md), with [Dispenser](../upgrades.md#dispenser) and [Entity Tracker](../upgrades.md#entity_tracker) Upgrades installed. With the *Drone* targeted and the *Entity Tracker* active, press the *$(k:pneumaticcraft.helmet.debugging.drone)$(/k:pneumaticcraft.helmet.debugging.drone)* key. Then, opening the *Drone Debugger* page in the Pneumatic Armor GUI will show that drone's program, including the current widget and any errors.

## Debugging (cont.)

There are a couple of other little tricks to be aware of:
- Right-clicking a Drone with a [GPS Tool](./gps_tool.md) makes it go to the GPS Tool's stored blockpos; may be useful to test Drone pathing.
- Hacking a Drone (using the [Security Upgrade](../upgrades.md#security) in the Pneumatic Helmet) makes it suspend its program and come to you; useful if its program has left it in a hard-to-reach spot. Hacking it again will resume the program.

Crafting a Drone

<Recipe id="pneumaticcraft:drone" />

