ItemEvents.tooltip(event => {
  let pipezUpgrades = {
    "Default": ["4 items/20t", "50 mB/t", "256 FE/t", "200 mB/t"],
    "Basic": ["8 items/15t", "100 mB/t", "1,024 FE/t", "400 mB/t"],
    "Improved": ["16 items/10t", "500 mB/t", "8,192 FE/t", "2,000 mB/t"],
    "Advanced": ["32 items/5t", "2,000 mB/t", "32,768 FE/t", "8,000 mB/t"],
    "Ultimate": ["64 items/1t", "10,000 mB/t", "131,072 FE/t", "40,000 mB/t"]
  };

  let pipezPipes = ["pipez:item_pipe", "pipez:fluid_pipe", "pipez:energy_pipe", "pipez:gas_pipe"];

  pipezPipes.forEach(pipe => {
    let pipeIndex = pipezPipes.indexOf(pipe);
    event.addAdvanced(pipe, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, Text.of("Hold [Shift] for more information").gold());
      } else {
        text.add(1, Text.of(`Transfer Rates:`).gold());
        text.add(2, Text.of(`Default: ${pipezUpgrades["Default"][pipeIndex]}`).white());
        text.add(3, Text.of(`Basic: ${pipezUpgrades["Basic"][pipeIndex]}`).green());
        text.add(4, Text.of(`Improved: ${pipezUpgrades["Improved"][pipeIndex]}`).aqua());
        text.add(5, Text.of(`Advanced: ${pipezUpgrades["Advanced"][pipeIndex]}`).darkPurple());
        text.add(6, Text.of(`Ultimate: ${pipezUpgrades["Ultimate"][pipeIndex]}`).red());
      }
    });
  });

  event.addAdvanced("pipez:universal_pipe", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.of("Hold [Shift] for more information").gold());
    } else {
      text.add(1, Text.of(`Transfer Rates: (item, fluid, energy, gas)`).gold());
      text.add(2, Text.of(`Default: ${pipezUpgrades["Default"][0]}, ${pipezUpgrades["Default"][1]}, ${pipezUpgrades["Default"][2]}, ${pipezUpgrades["Default"][3]}`).white());
      text.add(3, Text.of(`Basic: ${pipezUpgrades["Basic"][0]}, ${pipezUpgrades["Basic"][1]}, ${pipezUpgrades["Basic"][2]}, ${pipezUpgrades["Basic"][3]}`).green());
      text.add(4, Text.of(`Improved: ${pipezUpgrades["Improved"][0]}, ${pipezUpgrades["Improved"][1]}, ${pipezUpgrades["Improved"][2]}, ${pipezUpgrades["Improved"][3]}`).aqua());
      text.add(5, Text.of(`Advanced: ${pipezUpgrades["Advanced"][0]}, ${pipezUpgrades["Advanced"][1]}, ${pipezUpgrades["Advanced"][2]}, ${pipezUpgrades["Advanced"][3]}`).darkPurple());
      text.add(6, Text.of(`Ultimate: ${pipezUpgrades["Ultimate"][0]}, ${pipezUpgrades["Ultimate"][1]}, ${pipezUpgrades["Ultimate"][2]}, ${pipezUpgrades["Ultimate"][3]}`).red());
    }
  });

  for (let upgrade in pipezUpgrades) {
    let stats = pipezUpgrades[upgrade];
    event.addAdvanced(`pipez:${upgrade.toLowerCase()}_upgrade`, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, Text.of("Hold [Shift] for more information").gold());
      } else {
        text.add(1, Text.of("Upgrade Stats:").gold());
        text.add(2, Text.of(`Item: ${stats[0]}`).yellow());
        text.add(3, Text.of(`Fluid: ${stats[1]}`).aqua());
        text.add(4, Text.of(`Energy: ${stats[2]}`).red());
        text.add(5, Text.of(`Gas: ${stats[3]}`).green());
      }
    });
  }

  event.addAdvanced("pipez:infinity_upgrade", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.of("Hold [Shift] for more information").gold());
    } else {
      text.add(1, Text.of("Upgrade Stats:").gold());
      text.add(2, Text.of("All: 2,147,483,647/t").yellow());
      text.add(3, Text.of("Use at your own risk.").red());
    }
  });

  // Pipe Connector
  event.addAdvanced("pipe_connector:pipe_connector", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.of("Hold [Shift] for more information").gold());
    } else {
      text.add(1, Text.of("The Pipe Connector allows you to choose two positions by Shift+Right-Clicking,").gray());
      text.add(2, Text.of("once both positions are chosen, a preview of the path will be shown.").gray());
      text.add(3, Text.of("You can change the depth of the pipe by Shift+Scrolling.").gray());
      text.add(4, Text.of("Once you are happy with the path, you can Shift+Right-Click to open the GUI").gray());
      text.add(5, Text.of("and click on 'Place Pipes' to place the pipes.").gray());
      text.add(6, Text.of("'Reset Positions' to reset the positions if you are unhappy with the first position.").gray());
      text.add(7, Text.of("A list of supported pipes that can be placed can be found in EMI.").gray());
    }
  });

  // Just Dire Things
  let direOres = ["Ferricore", "Blazegold", "Celestigem", "Eclipse Alloy"];

  direOres.forEach(ore => {
    let oreId = `justdirethings:raw_${ore.toLowerCase().replace(" ", "")}`;
    if (!Item.exists(oreId))
      oreId = `justdirethings:${ore.toLowerCase().replace(" ", "")}`;
    event.add(oreId, [Text.of(`Can be gained from breaking Raw ${ore} Ore.`).gray(), Text.of(`Check EMI for how to make the ore.`).gray()]);
  });

  // AE2WTLib
  event.addAdvanced("ae2wtlib:quantum_bridge_card", (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.gold("Hold [Shift] for more information"));
    } else {
      text.add(1, Text.gray("Add this card to your wireless terminal to allow it to connect to a Quantum Ring"));
      text.add(2, Text.gray("by adding a Quantum Entangled Singularity to the Quantum Ring and terminal."));
      text.add(3, Text.gray("This will allow you to access your ME system from anywhere in the world."));
    }
  });
});