---
navigation:
  title: 'Micromissiles'
  icon: 'pneumaticcraft:micromissiles'
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:micromissiles
---

# Micromissiles

_Micromissiles_ are small hand-launched missiles with an explosive payload and smart mob targeting. To fire a _Micromissile_, simply _right-click_ the missile pod. Each pod has 100 missiles by default.

Micromissiles seek targets within a 24-block spherical radius, centered on the missile. Once a suitable target is found, the missile will turn toward that target.

## pneumaticcraft:micromissile (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:micromissile" y={-0.3} />
</GameScene>

_Small but lethal_

_Micromissiles_ will never target the player who fired the missile or any entity (pets, drones...) belonging to that player. But beware of collateral damage from nearby explosions: not recommended for close quarters combat!

_Micromissiles_ can target living entities, minecarts & boats, but will not target item entities or other non-living entities such as paintings.

If a _Micromissile_ hits any entity or block, it will immediately explode. The explosion will not damage terrain <Color id='dark_purple'>$(t:See 'B:damageTerrain' in mod config)by default$(/t:See 'B:damageTerrain' in mod config)</Color>.

_Micromissiles_ have a limited lifetime, which is 300 ticks (15 seconds) <Color id='dark_purple'>$(t:See 'I:missileLifetime' in mod config)by default$(/t:See 'I:missileLifetime' in mod config)</Color>. After that the missile will run out of fuel and drop from the sky, but it will still explode when it hits the ground.

If you aim directly at a suitable entity when firing, the fired _Micromissile_ will immediately lock on to that entity, regardless of what else is nearer.

If you _sneak+right-click_ the missile pod, a GUI will open allowing configuration of several missile properties:

- The selection triangle allows you to balance between top speed, turn rate and explosion power.

- You can select between _Smart_ and _Dumb_ mode: in _Smart_ mode, missiles will lock on to targets as described above, while in _Dumb_ mode, missiles will simply fly in a straight line until they hit something, but with good speed and damage capability.
- You can filter which entities to attack by entering an [entity filter](../base_concepts/entity_filter.md) in the **Entity Filter** field.

- The **Save as Default** button causes the current settings to be saved and used for all newly-crafted missile pods. Note: settings are saved server-side.

Creating Micromissiles

<Recipe id="pneumaticcraft:micromissiles" />
