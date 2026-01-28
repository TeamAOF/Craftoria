---
navigation:
  title: 'Entity Filters'
  icon: 'minecraft:player_head'
  parent: pneumaticcraft:base_concepts.md
---

# Entity Filters

_Entity Filters_ are used in several places in <Color id="dark_green">PneumaticCraft: Repressurized</Color>, where there is a need to specify which _Entities_ a machine or tool should affect in some way.

In most places where a filter can be entered, pop-up help can be shown by pressing & holding the _F1_ key.

To match entities by their entity type, just specify the type name e.g. <Color id="dark_red">creeper</Color> matches _minecraft:creeper_. To match an entity with a custom name (including players), quote the entity name, e.g. <Color id="dark_red">'Minemaarten'</Color> or <Color id="dark_red">'desht'</Color>.

When you want to specify a certain entity _type_ (e.g., animals, aggressive mobs, players in general), put a '@' in front. A full list of examples, including accepted _@ Specifiers_, follows.

## Examples

- <Color id="dark_red">@player</Color> matches all players
- <Color id="dark_red">@mob</Color> matches all aggressive creatures
- <Color id="dark_red">@animal</Color> matches all passive creatures (animals)
- <Color id="dark_red">@animal(age=adult)</Color> matches all adult animals
- <Color id="dark_red">@animal(age=baby)</Color> matches all baby animals
- <Color id="dark_red">@animal(breedable=yes)</Color> matches all animals that can breed right now
- <Color id="dark_red">sheep(shearable=yes)</Color> matches all sheep which can be sheared
- <Color id="dark_red">sheep(shearable=yes,color=black)</Color> matches all black sheep which can be sheared
- <Color id="dark_red">wolf(color=blue)</Color> matches all wolves/dogs with a blue collar.
- <Color id="dark_red">cat(color=white)</Color> matches all cats with a white collar.
- <Color id="dark_red">@minecart</Color> matches Minecarts
- <Color id="dark_red">@boat</Color> matches Boats
- <Color id="dark_red">@living</Color> matches all living entities
- <Color id="dark_red">@item</Color> matches item entities
- <Color id="dark_red">@orb</Color> matches experience orbs
- <Color id="dark_red">@drone</Color> matches [Drones](../tools/drone.md)
- <Color id="dark_red">@mob(mod=minecraft)</Color> matches mobs, but only from the _minecraft_ namespace
- <Color id="dark_red">Creeper</Color> matches creepers
- <Color id="dark_red">'MineMaarten'</Color> (or <Color id="dark_red">"Minemaarten"</Color>) matches an entity named 'MineMaarten'
- <Color id="dark_red">c\*</Color> matches any entity starting with the letter 'c' (like Creepers, or Cows).
- <Color id="dark_red">_pig_</Color> matches any entity that includes 'pig' in the name (like a Pig or Zombie Pigman).

- <Color id="dark_red">@player(team=team1)</Color> matches players on vanilla scoreboard team "team1"
- <Color id="dark_red">@player(holding=stick)</Color> matches players who are holding a stick right now
- <Color id="dark_red">@player(holding=#minecraft:planks)</Color> matches players holding any item in the _minecraft:planks_ item tag

- <Color id="dark_red">@player(ftbteam=\<uuid\>|\<shortname\>)</Color> matches players who are members of an [FTB Teams](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge) team with either the given UUID or short name.

You can also use the player modifiers <Color id="dark_red">ftbteam_officer</Color>, <Color id="dark_red">ftbteam_owner</Color> & <Color id="dark_red">ftbteam_ally</Color> to match players who are (at least) officers, owner or allies of the team, and <Color id="dark_red">ftbteam_enemy</Color> to match players who are specifically marked as enemies of the team.

All matches are case-insensitive, e.g. both <Color id="dark_red">zombie</Color> and <Color id="dark_red">Zombie</Color> will match zombies.

You can specify a _sequence_ of filters with the ';' (semicolon) separator - this is a _match any_ function:

- <Color id="dark_red">creeper;zombie</Color> matches both Creepers _and_ Zombies.

You can prefix a filter with '!' to negate the filter:

- <Color id="dark_red">!@player</Color> matches anything that is _not_ a player
- <Color id="dark_red">!Creeper;Zombie</Color> matches anything that is neither a Creeper _nor_ a Zombie
- <Color id="dark_red">Creeper;!Zombie</Color> is <Color id="red">invalid</Color>: '!' can only go right at the start of a filter

**Note:** for [Drone](../tools/drone.md) entity filters using the [Text](../programming/text.md) programming widget, '!' is not supported; connect the Text widget on the left, as normal.

## Related Chapters

- [TODO](../tools/micromissiles.md)
- [TODO](../tubes/air_grate_module.md)
- [TODO](../armor/pneumatic_helmet.md)
- [TODO](../machines/sentry_turret.md)
- [TODO](../machines/universal_sensor.md)
- [TODO](../programming/text.md)

_Machines & tools which use entity filtering_
