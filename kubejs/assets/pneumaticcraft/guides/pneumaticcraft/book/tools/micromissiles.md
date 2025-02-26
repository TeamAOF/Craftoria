---
navigation:
  title: "Micromissiles"
  icon: "pneumaticcraft:micromissiles"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:micromissiles
---

# Micromissiles

*Micromissiles* are small hand-launched missiles with an explosive payload and smart mob targeting. To fire a *Micromissile*, simply *right-click* the missile pod. Each pod has 100 missiles by default.

Micromissiles seek targets within a 24-block spherical radius, centered on the missile. Once a suitable target is found, the missile will turn toward that target.

## pneumaticcraft:micromissile (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:micromissile" y={-0.3} />
</GameScene>

*Small but lethal*

*Micromissiles* will never target the player who fired the missile or any entity (pets, drones...) belonging to that player. But beware of collateral damage from nearby explosions: not recommended for close quarters combat!

*Micromissiles* can target living entities, minecarts & boats, but will not target item entities or other non-living entities such as paintings.

If a *Micromissile* hits any entity or block, it will immediately explode. The explosion will not damage terrain <Color hex="#880">$(t:See 'B:damageTerrain' in mod config)by default$(/t:See 'B:damageTerrain' in mod config)</Color>.

*Micromissiles* have a limited lifetime, which is 300 ticks (15 seconds) <Color hex="#880">$(t:See 'I:missileLifetime' in mod config)by default$(/t:See 'I:missileLifetime' in mod config)</Color>. After that the missile will run out of fuel and drop from the sky, but it will still explode when it hits the ground.

If you aim directly at a suitable entity when firing, the fired *Micromissile* will immediately lock on to that entity, regardless of what else is nearer.

If you *sneak+right-click* the missile pod, a GUI will open allowing configuration of several missile properties:
- The selection triangle allows you to balance between top speed, turn rate and explosion power.


- You can select between *Smart* and *Dumb* mode: in *Smart* mode, missiles will lock on to targets as described above, while in *Dumb* mode, missiles will simply fly in a straight line until they hit something, but with good speed and damage capability.
- You can filter which entities to attack by entering an [entity filter](../base_concepts/entity_filter.md) in the **Entity Filter** field.


- The **Save as Default** button causes the current settings to be saved and used for all newly-crafted missile pods. Note: settings are saved server-side.

Creating Micromissiles

<Recipe id="pneumaticcraft:micromissiles" />

