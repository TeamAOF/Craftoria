---
navigation:
  parent: steam_age/index.md
  title: Do You Like Coke?
  icon: coke_oven
  position: 9

item_ids:
  - coke_oven
  - bronze_item_input_hatch
  - bronze_item_output_hatch
  - bronze_fluid_input_hatch
  - bronze_fluid_output_hatch
---

# Do You Like Coke?

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/structures/coke_oven.snbt" />

  <BoxAnnotation color="#dddddd" min="0 0 0" max="3 1 3">
    Valid Hatch positions
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 2 0" max="3 3 3">
    Valid Hatch positions (Except for the middle)
  </BoxAnnotation>
</GameScene>

Once you have had enough of the bronze machines, you can start working toward making steel. The ultimate goal is to be able to build the quarry, a multiblock that will dig ores for you!

The first step is to make coke, by heating coal without oxygen. For that, you will need to build a Coke Oven multiblock.

## Coke Oven

<Recipe id="modern_industrialization:steam_age/fireclay/coke_oven" />

For this first multiblock, you will need the Coke Oven itself of course, 21 Bricks and 3 §2Hatches§r (an item input, an item output and a fluid input).

Optionally add a fluid output hatch to collect creosote too.

## Hatches

### Item Hatches

<Row>
  <Recipe id="modern_industrialization:hatches/bronze/item_input_hatch" />
  <Recipe id="modern_industrialization:hatches/bronze/item_output_hatch" />
</Row>

### Fluid Hatches

<Row>
  <Recipe id="modern_industrialization:hatches/bronze/fluid_input_hatch" />
  <Recipe id="modern_industrialization:hatches/bronze/fluid_output_hatch" />
</Row>

The Coke Oven block here has the role of a §2Controller§r. Every multiblock is managed by a controller, but you usually cannot interact with the controller directly: all input and output goes through hatches. We need a fluid input because the coke oven is powered by steam, we need an item input for the coal and an output for the coke.

We can optionally add a fluid output hatch for the creosote. It is a chanced output and will therefore be voided if there is no room for it.

If we forget one of the hatches, the coke oven will not be able to start!

**Hold a Wrench to see the missing blocks and the errors!** You can also hold a Hatch to know where it can go.

We need 21 Bricks for this multiblock! Check EMI, it says 24 total, but we have 3 hatches so we only need bricks for the 21 remaining blocks!

## Coke Oven!

Once the Coke Oven says _Shape Valid_, fill the fluid input hatch with steam, put coal in the item input hatch and you're good to go!

Coke will be very useful for steel, but it is also a powerful fuel. It lasts 4 times as long as coal!
