---
navigation:
  title: 'Minigun Ammo'
  icon: 'pneumaticcraft:gun_ammo'
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:gun_ammo
  - pneumaticcraft:gun_ammo_incendiary
  - pneumaticcraft:gun_ammo_weighted
  - pneumaticcraft:gun_ammo_ap
  - pneumaticcraft:gun_ammo_explosive
  - pneumaticcraft:gun_ammo_freezing
---

# Minigun Ammo

Gun Ammo is used by the [Minigun](./minigun.md).

One ammo cartridge holds up to 2000 minigun rounds, depending on the ammo type. Ammo is steadily consumed while the _Minigun_ is firing, and ammo levels can be seen in the ammo item's tooltip, its durability bar, and (when the minigun is equipped) on the HUD, next to the minigun sight in the centre of the screen.

<a name="magazine"></a>
Ammo must be inserted into the _Minigun's_ magazine to be used; it will not be consumed from the player's inventory. _Sneak+right-click_ the _Minigun_ to load ammo into it.

Ammo is consumed from the numbered slots 1-4 in order, but you can _middle-click_ a slot to lock it, forcing the _Minigun_ to consume ammo from that slot only; useful if you have multiple ammo types loaded. _Middle-click_ a locked slot to unlock it again.

<ItemImage id="pneumaticcraft:gun_ammo" />

Plain _Gun Ammo_ has no special capabilities on its own, but has a large cartridge of 2000 rounds.

In addition, it is the only ammo type which can be crafted with [Potions](#potions) to gain their effect.

<ItemImage id="pneumaticcraft:gun_ammo_incendiary" />

_Incendiary Minigun Ammo_ has a cartridge size of 1000, and will set fire to entities it hits.

It also has a chance to set fire to blocks, so caution is advised!

<ItemImage id="pneumaticcraft:gun_ammo_weighted" />

_Weighted Minigun Ammo_ has a cartridge size of 500, and does very high damage, but due to its weight has only 20% of the range of normal ammo.

<ItemImage id="pneumaticcraft:gun_ammo_ap" />

_Armor-piercing Minigun Ammo_ has a cartridge size of 500, and is somewhat expensive to craft, but does slightly more damage than regular ammo, and can bypass the armor of targets.

<ItemImage id="pneumaticcraft:gun_ammo_explosive" />

_Explosive Minigun Ammo_ has a cartridge size of 250. It has a chance to create a small but highly effective explosion when it hits; beware, this explosion can also injure you. Explosions will not damage terrain <Color id='dark_purple'>$(t:See 'B:explosiveAmmoTerrainDamage' in config)by default$(/t:See 'B:explosiveAmmoTerrainDamage' in config)</Color>.

<ItemImage id="pneumaticcraft:gun_ammo_freezing" />

_Freezing Minigun Ammo_ has a cartridge size of 1000. It slows targets that it hits, and has a chance to encase them in a damaging freezing cloud; beware, this cloud can also injure you.

It does extra damage against fire-resistant targets, so is an excellent choice for fighting in the <Color id="dark_red">Nether</Color>.

<a name="potions"></a>

## Potion-Tipped Ammo

You can craft standard minigun ammo with any _Potion_, and that ammo no longer does physical damage, but has a chance to apply that potion effect to your target.

_Splash_ and _Lingering_ potions can also be used; they have the expected area effect, but ammo is consumed 3 times as quickly when tipped with splash potions, and 6 times as quickly with lingering potions!

<Recipe id="pneumaticcraft:gun_ammo" />

<Recipe id="pneumaticcraft:gun_ammo_incendiary" />

<Recipe id="pneumaticcraft:gun_ammo_weighted" />

<Recipe id="pneumaticcraft:gun_ammo_ap" />

<Recipe id="pneumaticcraft:gun_ammo_explosive" />

<Recipe id="pneumaticcraft:gun_ammo_freezing" />

<Recipe id="pneumaticcraft:gun_ammo_potion_crafting" />
