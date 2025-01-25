---
navigation:
  parent: steam_age/steam_age.md
  title: Infinite Resources?
  icon: steam_quarry
  position: 12

item_ids:
  - modern_industrialization:steam_quarry
---

# Infinite Resources?

<GameScene zoom="3"  interactive={true}>
  <ImportStructure src="../assets/structures/steam_quarry.snbt" />

  <BoxAnnotation color="#dddddd" min="0 0 0" max="3 1 3">
    Valid Hatch positions (Except for the middle, and where the controller is)
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 1 0" max="3 2 3">
    Valid Hatch positions (Except for the middle)
  </BoxAnnotation>
</GameScene>

## The Steam Quarry

<Recipe id="modern_industrialization:steam_age/steel/quarry_asbl" />

The Steam Quarry is a steam multiblock machine that consumes bronze drills, uses them to dig deeper than the bedrock and gives you back some ores, as you can see in EMI.

It's recommended that you have multiple SBFs running before you attempt to build it because it requires **a lot of steel**.

## Bronze Drill

<Recipe id="modern_industrialization:quarry/drill/bronze_drill_asbl" />

If this is the first multiblock you are building, make sure to read the [Coke Oven](coke_oven.md) entry!

It explains how multiblocks work, how to check if the structure is correct, and how to use hatches.
