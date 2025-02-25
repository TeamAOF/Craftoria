---
navigation:
  title: "Network Components"
  icon: "pneumaticcraft:network_api"
  parent: pneumaticcraft:components.md
item_ids:
  - pneumaticcraft:diagnostic_subroutine
  - pneumaticcraft:network_io_port
  - pneumaticcraft:network_registry
  - pneumaticcraft:network_node
  - pneumaticcraft:network_api
  - pneumaticcraft:network_data_storage
---

# Network Components

These components are used primarily to set up a [Security Station](../security_station.md), but some are also used as crafting components, and the [Network Storage](#network_storage) and [Network API](#network_api) can be used to store [Drone](../drone.md) programs.

<a name="diagnostic"></a>
The *Diagnostic Subroutine* is a required component in a [Security Station](../security_station.md).
It is responsible for tracing [hack attempts](../security_station.md#hacking) back to the hacker.  If all *Diagnostic Subroutines* are hacked, your *Security Station* has been compromised.

<Recipe id="pneumaticcraft:diagnostic_subroutine" />

<a name="io_port"></a>
The *Network IO Port*  is a required component in a [Security Station](../security_station.md).
This is the entry point for hack attempts on your *Security Station*.

<Recipe id="pneumaticcraft:network_io_port" />

<a name="registry"></a>
The *Network Registry*  is a required component in a [Security Station](../security_station.md).
This is a target for hackers; if *all* Registries are hacked, your *Security Station* has been compromised.

<Recipe id="pneumaticcraft:network_registry" />

<a name="node"></a>
The *Network Node* is a generic component in a [Security Station](../security_station.md), used to form pathways between the required components.

<Recipe id="pneumaticcraft:network_node" />

<a name="network_api"></a>
The *Network API* can be used to store [Drone](../drone.md) programs. It requires [Puzzle Pieces](../puzzle_pieces.md) to program, and can be used to run programs in the [Programmable Controller](../programmable_controller.md) or by the [External Program](../external_program.md) widget.

<Recipe id="pneumaticcraft:network_api" />

<a name="network_storage"></a>
The *Network Data Storage* can be used to store [Drone](../drone.md) programs. It does *not* require [Puzzle Pieces](../puzzle_pieces.md) to program, so cannot be used to run programs; however it is useful if you wish to store a library of programs, or to trade programs with other players.

<Recipe id="pneumaticcraft:network_data_storage" />

