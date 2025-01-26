---
navigation:
  parent: electric_age/index.md
  title: Large Tank
  icon: large_tank
  position: 1

item_ids:
  - large_tank
  - large_tank_hatch
---

# Large Tank

<GameScene zoom="3"  interactive={true}>
  <ImportStructure src="../assets/structures/large_tank.snbt" />
</GameScene>

The tank above is a 5x4x4 Large Tank, with a total capacity of 5,120 buckets.

The tank can be any size between 3x3x3 and 7x7x7.

The Large Tank is a multiblock that allows you to store large amounts of some fluid, for example steam. It can store 64 buckets worth of fluid for every block in the structure (including sides).

## Large Tank Parts

<Row>
 <Recipe id="modern_industrialization:electric_age/machine/large_tank_asbl" />
 <Recipe id="modern_industrialization:electric_age/machine/large_tank_hatch_asbl" />
</Row>

The Large Tank has many possible sizes depending on how much storage you need. You can open the size configuration panel by clicking on a button in the controller.
Only pipes may access the tank, either through the controller or through a Large Tank Hatch.
Don't break the controller or you will lose all of the stored fluid!

The Large Tank Hatch acts as an extension of the Large Tank block. You can right-click it to open the Large Tank's menu, and pipes connected to it will directly access the Large Tank's storage.
