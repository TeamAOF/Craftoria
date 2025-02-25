---
navigation:
  title: "Cooldowns and fuel"
  icon: "minecraft:coal"
  parent: advancedperipherals:metaphysics.md
---

# Cooldowns and fuel

All world changing operations will consume turtle fuel (of course, if you not disable fuel usage in CC:Tweaked configuration).

Also, most of this operations have cooldowns, so you should consider this in your code. Hopefully, every active cooldown can be recived via peripheral methods.

You think, that cooldowns are too big? This is when fuel consuming rate come to help!

Bigger fuel consuming rate will reduce cooldown, but obviously increate fuel consumption. For example, if click operation required 1 fuel point for perform and will have 5 seconds cooldown, with fuel consumption 2 you can perform click operation one in 2.5 seconds, but in cost of 2 fuel point.

However, fuel consumption rate is not so simple! Every automata core has max fuel consumption limitation, that can be retrieved via **getConfiguration** method.

Also, fuel point will grow faster, than cooldown drops. Fuel consumption 3 will required 4 fuel points, fuel consumption 4 will required fuel points, etc.

