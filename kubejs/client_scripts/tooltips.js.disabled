ItemEvents.tooltip(event => {
    let holdShift = Text.gold("Hold [Shift] for more information");
  
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
          text.add(1, holdShift);
        } else {
          text.add(1, Text.gold(`Transfer Rates:`));
          text.add(2, Text.white(`Default: ${pipezUpgrades["Default"][pipeIndex]}`));
          text.add(3, Text.green(`Basic: ${pipezUpgrades["Basic"][pipeIndex]}`));
          text.add(4, Text.aqua(`Improved: ${pipezUpgrades["Improved"][pipeIndex]}`));
          text.add(5, Text.darkPurple(`Advanced: ${pipezUpgrades["Advanced"][pipeIndex]}`));
          text.add(6, Text.red(`Ultimate: ${pipezUpgrades["Ultimate"][pipeIndex]}`));
        }
      });
    });
  
    event.addAdvanced("pipez:universal_pipe", (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShift);
      } else {
        text.add(1, Text.gold(`Transfer Rates: (item | fluid | energy | gas)`));
        text.add(2, Text.white(`Default: ${pipezUpgrades["Default"][0]} | ${pipezUpgrades["Default"][1]} | ${pipezUpgrades["Default"][2]} | ${pipezUpgrades["Default"][3]}`));
        text.add(3, Text.green(`Basic: ${pipezUpgrades["Basic"][0]} | ${pipezUpgrades["Basic"][1]} | ${pipezUpgrades["Basic"][2]} | ${pipezUpgrades["Basic"][3]}`));
        text.add(4, Text.aqua(`Improved: ${pipezUpgrades["Improved"][0]} | ${pipezUpgrades["Improved"][1]} | ${pipezUpgrades["Improved"][2]} | ${pipezUpgrades["Improved"][3]}`));
        text.add(5, Text.aqua(`Advanced: ${pipezUpgrades["Advanced"][0]} | ${pipezUpgrades["Advanced"][1]} | ${pipezUpgrades["Advanced"][2]} | ${pipezUpgrades["Advanced"][3]}`));
        text.add(6, Text.red(`Ultimate: ${pipezUpgrades["Ultimate"][0]} | ${pipezUpgrades["Ultimate"][1]} | ${pipezUpgrades["Ultimate"][2]} | ${pipezUpgrades["Ultimate"][3]}`));
      }
    });
  
    for (let upgrade in pipezUpgrades) {
      let stats = pipezUpgrades[upgrade];
      event.addAdvanced(`pipez:${upgrade.toLowerCase()}_upgrade`, (item, advanced, text) => {
        if (!event.shift) {
          text.add(1, holdShift);
        } else {
          text.add(1, Text.gold("Upgrade Stats:"));
          text.add(2, Text.yellow(`Item: ${stats[0]}`));
          text.add(3, Text.aqua(`Fluid: ${stats[1]}`));
          text.add(4, Text.red(`Energy: ${stats[2]}`));
          text.add(5, Text.green(`Gas: ${stats[3]}`));
        }
      });
    }
  
    event.addAdvanced("pipez:infinity_upgrade", (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShift);
      } else {
        text.add(1, Text.gold("Upgrade Stats:"));
        text.add(2, Text.yellow("All: 2,147,483,647/t"));
        text.add(3, Text.red("Use at your own risk."));
      }
    });
  
    // Pipe Connector
    event.addAdvanced("pipe_connector:pipe_connector", (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShift);
      } else {
        text.add(1, Text.gray("The Pipe Connector allows you to choose two positions by Shift+Right-Clicking,"));
        text.add(2, Text.gray("once both positions are chosen, a preview of the path will be shown."));
        text.add(3, Text.gray("You can change the depth of the pipe by Shift+Scrolling."));
        text.add(4, Text.gray("Once you are happy with the path, you can Shift+Right-Click to open the GUI"));
        text.add(5, Text.gray("and click on 'Place Pipes' to place the pipes."));
        text.add(6, Text.gray("'Reset Positions' to reset the positions if you are unhappy with the first position."));
        text.add(7, Text.gray("A list of supported pipes that can be placed can be found in EMI."));
      }
    });
  
    // Just Dire Things
    let direOres = ["Ferricore", "Blazegold", "Celestigem", "Eclipse Alloy"];
  
    direOres.forEach(ore => {
      let oreId = `justdirethings:raw_${ore.toLowerCase().replace(" ", "")}`;
      if (!Item.exists(oreId))
        oreId = oreId.replace("raw_", "");
      event.add(oreId, [Text.gray(`Can be gained from breaking Raw ${ore} Ore.`), Text.gray(`Check EMI for how to make the ore.`)]);
    });
  
    // AE2WTLib
    event.addAdvanced("ae2wtlib:quantum_bridge_card", (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShift);
      } else {
        text.add(1, Text.gray("Add this card to your wireless terminal to allow it to connect to a Quantum Ring"));
        text.add(2, Text.gray("by adding a Quantum Entangled Singularity to the Quantum Ring and terminal."));
        text.add(3, Text.gray("This will allow you to access your ME system from anywhere in the world."));
      }
    });
  });