{
  /**
   * Adds a gradient to the tooltip of items.
   * id: The item id.
   * name: The name of the item.
   * nodes: The RGB nodes for the gradient.
   * length: The length of the gradient. The higher the number, the smoother the gradient.
   * time: The time it takes for the gradient, in ticks.
   * Credits to xx_stray on the KJS discord for the original code, which I fixed for 1.21.1, and modified for my own use.
   */
  let colorfulnames = [
    /*
    {
      // id is required.
      id: 'examplemod:example_item',
      // name is optional and will default to the item's hover name if not specified.
      name: 'Example Item',
      // nodes, length, and time are optional and will default to the values below if not specified.
      nodes: [
        [255, 255, 0],
        [0, 255, 255],
        [255, 0, 255],
      ],
      length: 10,
      time: 1,
    },
    */
    {
      id: 'extended_industrialization:nano_quantum_helmet',
    },
    {
      id: 'extended_industrialization:nano_quantum_chestplate',
    },
    {
      id: 'extended_industrialization:nano_quantum_leggings',
    },
    {
      id: 'extended_industrialization:nano_quantum_boots',
    },
  ];

  for (let i = 0; i < colorfulnames.length; i++) {
    let cname = colorfulnames[i];
    if (!cname.id) {
      console.error('GradientTooltips: Item id is required.');
      continue;
    }
    ItemEvents.modifyTooltips((event) => {
      event.modify(cname.id, (text) => {
        text.dynamic(`gradient_${cname.id.split(':')[1]}`);
      });
    });

    ItemEvents.dynamicTooltips(`gradient_${cname.id.split(':')[1]}`, (event) => {
      if (!cname.name) cname.name = event.item.hoverName.string;
      if (!cname.nodes)
        cname.nodes = [
          [255, 255, 0],
          [0, 255, 255],
          [255, 0, 255],
        ];
      if (!cname.length) cname.length = 10;
      if (!cname.time) cname.time = 1;

      let offset = Math.floor(Client.player.tickCount / cname.time) % (cname.nodes.length * cname.length);
      let namearray = cname.name.split('');
      let coloredname = [];
      for (let j = 0; j < namearray.length; j++) {
        let pos = (j + offset) % (cname.nodes.length * cname.length);
        let newcolor = 0;
        for (let k = 0; k < 3; k++) {
          newcolor +=
            Math.pow(256, 2 - k) *
            (cname.nodes[Math.floor(pos / cname.length) % cname.nodes.length][k] +
              Math.floor(
                ((cname.nodes[(Math.floor(pos / cname.length) + 1) % cname.nodes.length][k] -
                  cname.nodes[Math.floor(pos / cname.length) % cname.nodes.length][k]) /
                  cname.length) *
                  (pos % cname.length)
              ));
        }
        coloredname.push(Text.of(namearray[j]).color(newcolor));
      }
      event.lines[0] = coloredname;
    });
  }
}
