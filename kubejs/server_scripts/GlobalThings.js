// Global variables used in server_scripts

/**
 * Toggles debug mode, make sure to set this to false when not in dev environment
 * it will spam the console with a lot of information
 * Different toggles:
 * - false: Disables debug mode
 * - 'all': Enables all debug messages
 * - 'deprecation': Enables deprecation debug messages
 * - 'unify': Enables all unify debug messages
 */
let debug = false;

// Used for tooltips
let holdShift = Text.gold('Hold [Shift] for more information');

let _makeID = (mod, type, output, input) => {
  output = output.split(':')[1].replace(' ', '_');
  input = input.split(':')[1].replace(' ', '_');

  //console.info(`ID: craftoria:${mod}/${type}/${output}_from_${input}`);
  return `craftoria:${mod}/${type}/${output}_from_${input}`;
};
