---
navigation:
  title: "Entity Filters"
  icon: "minecraft:player_head"
  parent: pneumaticcraft:base_concepts.md
---

# Entity Filters

*Entity Filters* are used in several places in <Color hex="#228">PneumaticCraft: Repressurized</Color>, where there is a need to specify which *Entities* a machine or tool should affect in some way.

In most places where a filter can be entered, pop-up help can be shown by pressing & holding the *F1* key.

To match entities by their entity type, just specify the type name (e.g. <Color hex="#800">creeper</Color> matches *minecraft:creeper*. To match an entity with a custom name (including players), quote the entity name, e.g. <Color hex="#800">'Minemaarten'</Color> or <Color hex="#800">'desht'</Color>.

When you want to specify a certain entity *type* (e.g., animals, aggressive mobs, players in general), put a '@' in front. A full list of examples, including accepted *@ Specifiers*, follows.

## Examples


- <Color hex="#800">@player</Color> matches all players
- <Color hex="#800">@mob</Color> matches all aggressive creatures
- <Color hex="#800">@animal</Color> matches all passive creatures (animals)
- <Color hex="#800">@animal(age=adult)</Color> matches all adult animals
- <Color hex="#800">@animal(age=baby)</Color> matches all baby animals
- <Color hex="#800">@animal(breedable=yes)</Color> matches all animals that can breed right now
- <Color hex="#800">sheep(shearable=yes)</Color> matches all sheep which can be sheared

## Examples (cont.)


- <Color hex="#800">sheep(shearable=yes,color=black)</Color> matches all black sheep which can be sheared
- <Color hex="#800">wolf(color=blue)</Color> matches all wolves/dogs with a blue collar. 
- <Color hex="#800">cat(color=white)</Color> matches all cats with a white collar.
- <Color hex="#800">@minecart</Color> matches Minecarts
- <Color hex="#800">@boat</Color> matches Boats
- <Color hex="#800">@living</Color> matches all living entities
- <Color hex="#800">@item</Color> matches item entities
- <Color hex="#800">@orb</Color> matches experience orbs

## Examples (cont.)


- <Color hex="#800">@drone</Color> matches [Drones](../drone.md)
- <Color hex="#800">@mob(mod=minecraft)</Color> matches mobs, but only from the *minecraft* namespace
- <Color hex="#800">Creeper</Color> matches creepers
- <Color hex="#800">'MineMaarten'</Color> (or <Color hex="#800">"Minemaarten"</Color>) matches an entity named 'MineMaarten'
- <Color hex="#800">c*</Color> matches any entity starting with the letter 'c' (like Creepers, or Cows). 
- <Color hex="#800">*pig*</Color> matches any entity that includes 'pig' in the name (like a Pig or Zombie Pigman).


- <Color hex="#800">@player(team=team1)</Color> matches players on vanilla scoreboard team "team1"
- <Color hex="#800">@player(holding=stick)</Color> matches players who are holding a stick right now
- <Color hex="#800">@player(holding=#minecraft:planks)</Color> matches players holding any item in the *minecraft:planks* item tag


- <Color hex="#800">@player(ftbteam=<uuid>|<shortname>)</Color> matches players who are members of an [FTB Teams](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge) team with either the given UUID or short name.

You can also use the player modifiers <Color hex="#800">ftbteam_officer</Color>, <Color hex="#800">ftbteam_owner</Color> & <Color hex="#800">ftbteam_ally</Color> to match players who are (at least) officers, owner or allies of the team, and <Color hex="#800">ftbteam_enemy</Color> to match players who are specifically marked as enemies of the team.

All matches are case-insensitive, e.g. both <Color hex="#800">zombie</Color> and <Color hex="#800">Zombie</Color> will match zombies.

You can specify a *sequence* of filters with the ';' (semicolon) separator - this is a *match any* function:
- <Color hex="#800">creeper;zombie</Color> matches both Creepers *and* Zombies.

You can prefix a filter with '!' to negate the filter:
- <Color hex="#800">!@player</Color> matches anything that is *not* a player
- <Color hex="#800">!Creeper;Zombie</Color> matches anything that is neither a Creeper *nor* a Zombie
- <Color hex="#800">Creeper;!Zombie</Color> is <Color hex="#f00">invalid</Color>: '!' can only go right at the start of a filter

**Note:** for [Drone](../drone.md) entity filters using the [Text](../text.md) programming widget, '!' is not supported; connect the Text widget on the left, as normal.

## Related Chapters

- [TODO](../micromissiles.md)
- [TODO](../air_grate_module.md)
- [TODO](../pneumatic_helmet.md)
- [TODO](../sentry_turret.md)
- [TODO](../universal_sensor.md)
- [TODO](../text.md)

*Machines & tools which use entity filtering*

