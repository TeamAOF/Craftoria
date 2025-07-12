---
navigation:
  title: 'Basic Drone Tutorial #1'
  icon: 'minecraft:knowledge_book'
  parent: pneumaticcraft:programming.md
---

# Basic Drone Tutorial #1

In this tutorial, we'll set up a simple program to make a [Drone](../tools/drone.md) dig out an area. Before you start, you'll need:

- A [Programmer](./programmer.md) (of course)
- (If you're not in Creative Mode) A _Chest_ adjacent to the Programmer containing at least six [Puzzle Pieces](./puzzle_pieces.md)
- A _Chest_ or any other inventory, containing a _Shovel_ of any type
- A basic [GPS Tool](../tools/gps_tool.md)
- [GPS Area Tool](../tools/gps_area_tool.md)

Open the [Programmer](./programmer.md) GUI. On the right, you'll see a _tray_ of <Color id='dark_purple'>$(t:The virtual representations of Puzzle Pieces in the GUI are referred to as Programming Widgets)Programming Widgets$(/t:The virtual representations of Puzzle Pieces in the GUI are referred to as Programming Widgets)</Color>. There are multiple pages of these; you can either cycle through with the arrow buttons below the tray, or expand the tray by pressing _Space_ or _Tab_.

When expanded, a textfield appears above the tray where you can enter a _filter_ to search for widgets. Type 'start' there now: you'll see only one widget not <Color id="gray">grayed</Color> out.

Now drag that [Start](./start.md) widget onto the main programming area. It will appear with a <Color id="dark_red">red border</Color>, indicating a problem: mouse over to see what.

Right, there's no widget connected underneath - we will remedy that now by creating our program.

Find an [Import From Inventory](./inventory_import.md) widget and drag it to right below the _Start_ widget.

If you place it close enough, it will 'snap' to the bottom of the _Start_ widget. Notice how the connectors fit, like a jigsaw puzzle; hence the name _Puzzle Piece_.

Next, drag an [Area](./area.md) widget and connect it to the right (<Color id='dark_purple'>$(t:Widgets on the right of other widgets act as a whitelist; widgets on the left act as a blacklist)not left$(/t:Widgets on the right of other widgets act as a whitelist; widgets on the left act as a blacklist)</Color>) of the _Import_ widget, and an [Item Filter](./item_filter.md) widget, also to the right of the _Import_ widget. Again, make sure they 'snap' together.

You'll notice the _Area_ widget also starts with a <Color id="dark_red">red border</Color>, because it doesn't have an area defined yet. Take your _GPS Tool_, and _sneak+right-click_ on the _chest_ containing the _shovel_ you placed before. You'll see it highlights the location.

Now, in the Programmer GUI, _left-click_ the _Area_ widget with the _GPS Tool_ on your cursor: you'll see the location copied onto the _Area_ widget!

Now for the _Item Filter_: _right-click_ it to open an options GUI. Click the **Search Item...** button, and type 'shovel' into the result search window. Choose the shovel type that you put in the chest earlier, and press _Escape_ to close the search box.

Back in the _Item Filter_ window, ensure 'Item Durability' is _unchecked_, so it will also match partially used shovels. Press _Escape_ again: back to the main GUI.

At this point, we've told the Drone to pick up a shovel from the chest; now to make it dig!

Drag a [Dig](./dig.md) widget and snap it to the bottom of the _Import_ widget.

Drag another _Area_ widget and snap it to the right of the _Dig_ widget.

Let's define the area to be dug: take your _GPS Area Tool_ and _right-click_ a block to form one corner of the area. _Left-click_ a block at the opposite corner. Since the drone will be using a shovel, try to stick to dirt/sand.

Ensure the highlighted area is a _solid box_ - it should be by default, but you can _left/right-click_ the tool in the air to open a configuration GUI where the shape can be defined.

Back in the Programmer GUI, take the _GPS Area Tool_ and _left-click_ it on the _Area_ widget attached to the _Dig_ widget. As before, you'll see its settings copied onto the Area widget.

At this point, there should be no red highlights indicating any errors: congratulations, you have a valid program!

Finally, take a [Drone](../tools/drone.md), and ensure it's been pressurized in a [Charging Station](../machines/charging_station.md). Put the Drone item in the slot in the top right of the Programmer GUI and click the _⟶ (export)_ button (you can name the Drone if you want, in the textfield to the left).

You'll get some audible feedback, and your Drone is programmed!

All that remains now is to deploy your Drone: _right-click_ in the world somewhere near your chest, and watch it go to work!
