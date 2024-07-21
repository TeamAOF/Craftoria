/*
ServerEvents.recipes(e => {
  e.remove({ type: "minecraft:smelting", output: "bigreactors:graphite_ingot" });
  e.remove({ type: "minecraft:blasting", output: "bigreactors:graphite_ingot" });
  e.smelting("bigreactors:graphite_ingot", ["#c:dusts/coal", "#c:dusts/charcoal", "#c:dusts/lignite_coal"]).xp(1);
  e.blasting("bigreactors:graphite_ingot", ["#c:dusts/coal", "#c:dusts/charcoal", "#c:dusts/lignite_coal"]).xp(1);
});
*/