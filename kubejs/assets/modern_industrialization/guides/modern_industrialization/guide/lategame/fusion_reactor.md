---
navigation:
  parent: lategame/index.md
  title: FUUUUUSION
  icon: fusion_reactor
  position: 2

item_ids:
  - fusion_reactor
  - plasma_turbine
---

# FUUUUUSION

<Row>
  <GameScene zoom="1.9" interactive={true}>
    <ImportStructure src="../assets/structures/fusion_reactor.snbt" />

    <BoxAnnotation color="#191ac3" min="7 0 0" max="8 3 1">
      Valid Hatch positions (Except for the middle)
    </BoxAnnotation>

    <BoxAnnotation color="#191ac3" min="14 0 7" max="15 3 8">
      Valid Hatch positions
    </BoxAnnotation>

    <BoxAnnotation color="#191ac3" min="0 0 7" max="1 3 8">
      Valid Hatch positions
    </BoxAnnotation>

    <BoxAnnotation color="#191ac3" min="7 0 14" max="8 3 15">
      Valid Hatch positions
    </BoxAnnotation>

  </GameScene>

  <GameScene zoom="3.6" interactive={true}>
    <ImportStructure src="../assets/structures/plasma_turbine.snbt" />

    <BoxAnnotation color="#191ac3" min="0 0 0" max="3 3 1">
      Valid Fluid Input Hatch positions (Except for the middle)
    </BoxAnnotation>

    <BoxAnnotation color="#db3f17" min="1 1 3" max="2 2 4">
      Valid Energy Ouput Hatch position
    </BoxAnnotation>

  </GameScene>
</Row>

## Fusion Reactor

_Or as I like to call it, the Donut of Power!_

<Recipe id="modern_industrialization:electric_age/machine/fusion_reactor_asbl" />

The Fusion Reactor is the ultimate energy source! It can combine Deuterium, Tritium, and/or Helium-3 into Helium Plasma, the most powerful fuel in the game!. However, it requires a large amount of energy to ignite the reaction.

## Plasma Turbine

<Recipe id="modern_industrialization:electric_age/machine/plasma_turbine_asbl" />

The Plasma Turbine can turn Helium Plasma into EU, at the rate of 100 kEU per millibucket. Its maximum production rate is roughly 1 MEU/t.
