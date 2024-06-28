ServerEvents.tags("item", e => {
  //Fixes ae2 wrenches not working as wrenches for other mods, and other mods not recognizing them as wrenches.
  //Should be removed when AE2 fixes this on their end.
  e.add("c:tools/wrench", ["#ae2:quartz_wrench", "ae2:network_tool"]);
  e.add("c:tools/wrenches", "#c:wrenches");
});

ServerEvents.tags("block", e => {
  e.add("ftbchunks:interact_whitelist", ["@waystones"]);
});
