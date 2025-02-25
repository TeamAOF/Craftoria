---
navigation:
  title: "Basic Drone Tutorial #1"
  icon: "minecraft:knowledge_book"
  parent: pneumaticcraft:programming.md
---

# Basic Drone Tutorial #1

In this tutorial, we'll set up a simple program to make a [Drone](../drone.md) dig out an area. Before you start, you'll need:


- A [Programmer](./programmer.md) (of course)
- (If you're not in Creative Mode) A *Chest* adjacent to the Programmer containing at least six [Puzzle Pieces](./puzzle_pieces.md) 
- A *Chest* or any other inventory, containing a *Shovel* of any type
- A basic [GPS Tool](../gps_tool.md) 
- [GPS Area Tool](../gps_area_tool.md)

Open the [Programmer](./programmer.md) GUI. On the right, you'll see a *tray* of <Color hex="#880">$(t:The virtual representations of Puzzle Pieces in the GUI are referred to as Programming Widgets)Programming Widgets$(/t:The virtual representations of Puzzle Pieces in the GUI are referred to as Programming Widgets)</Color>. There are multiple pages of these; you can either cycle through with the arrow buttons below the tray, or expand the tray by pressing *Space* or *Tab*.

When expanded, a textfield appears above the tray where you can enter a *filter* to search for widgets. Type 'start' there now: you'll see only one widget not <Color id="gray">grayed</Color> out.

Now drag that [Start](./start.md) widget onto the main programming area. It will appear with a <Color id="dark_red">red border</Color>, indicating a problem: mouse over to see what.

Right, there's no widget connected underneath - we will remedy that now by creating our program.

Find an [Import From Inventory](./inventory_import.md) widget and drag it to right below the *Start* widget.

If you place it close enough, it will 'snap' to the bottom of the *Start* widget. Notice how the connectors fit, like a jigsaw puzzle; hence the name *Puzzle Piece*.

Next, drag an [Area](./area.md) widget and connect it to the right (<Color hex="#880">$(t:Widgets on the right of other widgets act as a whitelist; widgets on the left act as a blacklist)not left$(/t:Widgets on the right of other widgets act as a whitelist; widgets on the left act as a blacklist)</Color>) of the *Import* widget, and an [Item Filter](./item_filter.md) widget, also to the right of the *Import* widget. Again, make sure they 'snap' together.

You'll notice the *Area* widget also starts with a <Color id="dark_red">red border</Color>, because it doesn't have an area defined yet. Take your *GPS Tool*, and *sneak+right-click* on the *chest* containing the *shovel* you placed before. You'll see it highlights the location.

Now, in the Programmer GUI, *left-click* the *Area* widget with the *GPS Tool* on your cursor: you'll see the location copied onto the *Area* widget!

Now for the *Item Filter*: *right-click* it to open an options GUI. Click the **Search Item...** button, and type 'shovel' into the result search window. Choose the shovel type that you put in the chest earlier, and press *Escape* to close the search box.

Back in the *Item Filter* window, ensure 'Item Durability' is *unchecked*, so it will also match partially used shovels. Press *Escape* again: back to the main GUI.

At this point, we've told the Drone to pick up a shovel from the chest; now to make it dig!

Drag a [Dig](./dig.md) widget and snap it to the bottom of the *Import* widget.

Drag another *Area* widget and snap it to the right of the *Dig* widget.

Let's define the area to be dug: take your *GPS Area Tool* and *right-click* a block to form one corner of the area. *Left-click* a block at the opposite corner. Since the drone will be using a shovel, try to stick to dirt/sand.

Ensure the highlighted area is a *solid box* - it should be by default, but you can *left/right-click* the tool in the air to open a configuration GUI where the shape can be defined.

Back in the Programmer GUI, take the *GPS Area Tool* and *left-click* it on the *Area* widget attached to the *Dig* widget. As before, you'll see its settings copied onto the Area widget.

At this point, there should be no red highlights indicating any errors: congratulations, you have a valid program!

Finally, take a [Drone](../drone.md), and ensure it's been pressurized in a [Charging Station](../charging_station.md). Put the Drone item in the slot in the top right of the Programmer GUI and click the *⟶ (export)* button (you can name the Drone if you want, in the textfield to the left).

You'll get some audible feedback, and your Drone is programmed!

All that remains now is to deploy your Drone: *right-click* in the world somewhere near your chest, and watch it go to work!

