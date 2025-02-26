---
navigation:
  title: "Interdiction Matrix"
  icon: "mffs:interdiction_matrix"
  parent: mffs:machines.md
item_ids:
  - mffs:interdiction_matrix
---

# Interdiction Matrix

<ItemImage id="mffs:interdiction_matrix" />

The <Color id="blue">Interdiction Matrix</Color> is a member of the MFFS family of machines. It imposes restrictions on players or entities present in the space around it. For example, it can be configured to automatically kill mobs or players that move into its area of effect, or to prevent unauthorised players from tampering with other machines.

Crafting the <Color id="blue">Interdiction Matrix</Color>.

<Recipe id="mffs:interdiction_matrix" />

## Operation

The space around an <Color id="blue">Interdiction Matrix</Color> is split up into two logical regions: **Action** and **Warning**. The action region radiates out from the Matrix itself by the same number of blocks as there are [<Color id="dark_purple">Scale Modules</Color>](../upgrade_modules/scale_module.md) installed. By default, the warning region continues from the edge of the action region (as a concentric sphere) by an additional 3 blocks.

When a player moves into the warning area of an [Interdiction Matrix](./interdiction_matrix.md), it will send an alert message to say they have just entered its scanning range. If a player does not wish to experience first-hand which modules the Matrix has installed, they should not proceed closer. With no modules installed, an [Interdiction Matrix](./interdiction_matrix.md) doesn't really do anything. With [<Color id="dark_purple">modules</Color>](../interdiction_modules.md) installed, it can serve as a powerful defense system.

