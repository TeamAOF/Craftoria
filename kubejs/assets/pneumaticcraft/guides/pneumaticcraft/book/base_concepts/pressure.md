---
navigation:
  title: "Pressure"
  icon: "pneumaticcraft:pressure_tube"
  parent: pneumaticcraft:base_concepts.md
---

# Pressure

Compressed air is the <Color hex="#228">PneumaticCraft: Repressurized</Color> *power system*, based on real-world pressure mechanics.
- Compressed air is *produced* by a class of machines called *Compressors*, of which there are several types.
- All pressurizable machines and tools have a *volume* (measured in mL), which is the amount of air they can store at standard atmospheric pressure, or <Color hex="#880">$(t:This mod uses 0 bar to represent standard atmospheric pressure, also known as Gauge Pressure)0 bar$(/t:This mod uses 0 bar to represent standard atmospheric pressure, also known as Gauge Pressure)</Color>.


- The *pressure P* of a machine or tool can be calculated as:

  <Color hex="#272">P = (A / V) - 1</Color>

where <Color hex="#272">V</Color> is the *volume* and <Color hex="#272">A</Color> is the *air* currently in the machine. E.g a machine with 5000mL *volume* storing 20000mL *air* has a pressure of *3 bar*.
- The volume of most machines can be increased with [Volume Upgrades](./upgrades.md#volume), which mean smaller pressure drops when air is used.


- Air moves from higher pressure blocks to lower pressure blocks. Leaving [tubes](../pressure_tubes.md) or machines unconnected will cause a giant *air leak*, which means pressure loss! Air leaks are audible as a hissing sound, and visible as a stream of particles leaving the block.
- Pressure tries to balance. Connecting a small machine to a big air capacity (like a [Pressure Chamber](../pressure_chamber.md)) will result in a pressure build-up in the machine.


- Pressure applies force on the inner walls of a machine or [pressure tube](../pressure_tubes.md). Applying too much pressure results in an *Uncontrolled Rapid Air Release Event*, also known as an *explosion*. The pressure at which machines can explode is shown as the red area in the pressure gauge in any machine's GUI, but the exact point at which a machine will explode isn't predictable.


- It's important to understand that while many machines require a *minimum pressure* to operate, the operations that a machine carries out consume *air*, not *pressure*; pressure is just a function of stored air and volume.

