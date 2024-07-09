ItemEvents.tooltip((event) => {
  let deprecatedItems = { // Item ID: Message, @ModID: Message, or /regex/: Message
    "@ironchest": "Iron Chests mod is deprecated, use Expanded Storage instead.\nYou can convert the chests by placing them in a crafting table.",
  };

  for (let [item, message] in deprecatedItems) {
    event.add(item, `§4${message}§r`);
  }
});