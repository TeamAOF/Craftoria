ServerEvents.generateData('before_mods', event => {
  /**
   *
   * @param {string} type
   * @param {Special.Attribute} attribute
   * @param {$AttributeModifier$Operation_} operation
   * @param {number} amount
   */
  const orbHelper = (type, attribute, operation, amount) => {
    if (!type || !attribute || !operation || !amount) {
      logError(`Invalid parameters for orbHelper: type=${type}, attribute=${attribute}, operation=${operation}, amount=${amount}`);
      return;
    }

    event.json(`craftoria:irons_spellbooks/upgrade_orb_type/${type}`, {
      amount: amount,
      attribute: attribute,
      containerItem: {
        count: 1,
        id: `craftoria:${type}_upgrade_orb`
      },
      operation: operation,
    });
  };
});