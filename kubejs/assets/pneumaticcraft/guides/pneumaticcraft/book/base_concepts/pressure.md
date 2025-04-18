---
navigation:
  title: 'Pressure'
  icon: 'pneumaticcraft:pressure_tube'
  parent: pneumaticcraft:base_concepts.md
---

# Pressure

Compressed air is the <Color id="dark_green">PneumaticCraft: Repressurized</Color> _power system_, based on real-world pressure mechanics.

- Compressed air is _produced_ by a class of machines called _Compressors_, of which there are several types.
- All pressurizable machines and tools have a _volume_ (measured in mL), which is the amount of air they can store at standard atmospheric pressure, or <Color id='dark_purple'>$(t:This mod uses 0 bar to represent standard atmospheric pressure, also known as Gauge Pressure)0 bar$(/t:This mod uses 0 bar to represent standard atmospheric pressure, also known as Gauge Pressure)</Color>.

- The _pressure P_ of a machine or tool can be calculated as:

  <Color id='dark_green'>P = (A / V) - 1</Color>

where <Color id='dark_green'>V</Color> is the _volume_ and <Color id='dark_green'>A</Color> is the _air_ currently in the machine. E.g a machine with 5000mL _volume_ storing 20000mL _air_ has a pressure of _3 bar_.

- The volume of most machines can be increased with [Volume Upgrades](./upgrades.md#volume), which mean smaller pressure drops when air is used.

- Air moves from higher pressure blocks to lower pressure blocks. Leaving [tubes](../tubes/pressure_tubes.md) or machines unconnected will cause a giant _air leak_, which means pressure loss! Air leaks are audible as a hissing sound, and visible as a stream of particles leaving the block.
- Pressure tries to balance. Connecting a small machine to a big air capacity (like a [Pressure Chamber](../manufacturing/pressure_chamber.md)) will result in a pressure build-up in the machine.

- Pressure applies force on the inner walls of a machine or [pressure tube](../tubes/pressure_tubes.md). Applying too much pressure results in an _Uncontrolled Rapid Air Release Event_, also known as an _explosion_. The pressure at which machines can explode is shown as the red area in the pressure gauge in any machine's GUI, but the exact point at which a machine will explode isn't predictable.

- It's important to understand that while many machines require a _minimum pressure_ to operate, the operations that a machine carries out consume _air_, not _pressure_; pressure is just a function of stored air and volume.
