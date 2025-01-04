ItemEvents.modifyTooltips((event) => {
  const HOLD_SHIFT_TEXT = Text.translate('tooltip.enchdesc.hold');
  const ENCHANTED_BOOK = Ingredient.of('minecraft:enchanted_book');

  event.modify(ENCHANTED_BOOK, {shift: false}, (item) => {
    item.add(HOLD_SHIFT_TEXT);
  });

  event.modifyAll({shift: true}, (item) => {
    item.dynamic('ench_desc');
  });
});

ItemEvents.dynamicTooltips('ench_desc', (event) => {
  const EMBELLISH_TEXT = (name, description) => Text.translate('tooltip.enchdesc.embellish', name, description);
  const enchantments = event.item.enchantments;
  enchantments.keySet().forEach((ench) => {
    let descriptionId = `enchantment.${ench.registeredName.replace(':', '.')}`;
    event.add(EMBELLISH_TEXT(Text.translate(descriptionId), Text.translate(`${descriptionId}.desc`).darkGray()));
  });
});
