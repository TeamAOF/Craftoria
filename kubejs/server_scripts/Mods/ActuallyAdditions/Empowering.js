ServerEvents.recipes(event => {
  // removes all empowerer recipes
  event.remove({ type: "actuallyadditions:empowering" })

  // adds a recipe that empowers a dirt block with 2 nether warts, a red mushroom and a brown mushroom as modifiers into 2 mycelium
  // uses the default energy of 1000 Crystal Flux
  // uses the default laser color of white (0xFFFF_FFFF)
  // uses the default time of 100 ticks (5 seconds) to process
  event.recipes.actuallyadditions.empowering(Item.of('gateways:gate_pearl[gateways:gateway="craftoria:endless/boss"]'), 'apotheosis:mythic_material', [
    'craftoria:ice_essence',
    'craftoria:fire_essence',
    'craftoria:nature_essence',
    'craftoria:dark_essence'
  ])
})