// priority: 2147483647
// Global variables/functions used in server_scripts

const $NeighborNotifyEvent = Java.loadClass('net.neoforged.neoforge.event.level.BlockEvent$NeighborNotifyEvent');
const $InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand');
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
const $WeightedPressurePlateBlock = Java.loadClass('net.minecraft.world.level.block.WeightedPressurePlateBlock');
const $PressurePlateBlock = Java.loadClass('net.minecraft.world.level.block.PressurePlateBlock');
const $FenceGateBlock = Java.loadClass('net.minecraft.world.level.block.FenceGateBlock');
const $TrapDoorBlock = Java.loadClass('net.minecraft.world.level.block.TrapDoorBlock');
const $ButtonBlock = Java.loadClass('net.minecraft.world.level.block.ButtonBlock');
const $LeverBlock = Java.loadClass('net.minecraft.world.level.block.LeverBlock');
const $DoorBlock = Java.loadClass('net.minecraft.world.level.block.DoorBlock');
const $DoubleBlockHalf = Java.loadClass('net.minecraft.world.level.block.state.properties.DoubleBlockHalf');
const $ServerLevel = Java.loadClass('net.minecraft.server.level.ServerLevel');

const $Integer = Java.loadClass('java.lang.Integer');
const $Boolean = Java.loadClass('java.lang.Boolean');

/**
 * Choose the debug level for logging.
 * Different toggles:
 * - 'none' : Disables logging entirely
 * - 'error': Enables logging for errors only
 * - 'warn' : Enables logging for warnings
 * - 'info' : Enables logging for info messages
 * - 'debug': Enables logging for debug messages
 */
const debug = 'error';

// Used for tooltips
const holdShift = Text.gold('Hold [Shift] for more information');

/**
 * Converts a JavaScript number to a Java Integer.
 * @param {*} n number to convert
 * @returns {number}
 */
const toJavaInt = n => $Integer.valueOf(n.toString());

/**
 * Converts a JavaScript boolean to a Java Boolean.
 * @param {*} n boolean to convert
 * @returns {boolean}
 */
const toJavaBool = n => $Boolean.valueOf(n.toString());

/**
 * Returns the server level from the level accessor.
 * @param {$LevelAccessor_} levelAccessor
 * @returns {$ServerLevel_}
 */
const getServerLevel = levelAccessor => {
  if (levelAccessor.clientSide) return null;
  if (levelAccessor instanceof $ServerLevel) return levelAccessor;
  return null;
};

/**
 * Used for recipe IDs
 * @param {Special.Mod} mod The mod name
 * @param {Special.RecipeType} type The recipe type
 * @param {string} output The output item
 * @param {string} input The input item
 */
const _makeRecipeID = (mod, type, output, input) => {
  output = ID.path(output).replace(' ', '_');
  input = ID.path(input).replace(' ', '_');
  logDebug(`ID: ${`craftoria:${mod}/${ID.path(type)}/${output}_from_${input}`}`);
  return `craftoria:${mod}/${ID.path(type)}/${output}_from_${input}`;
};

const debugToInt = () => {
  switch (debug) {
    case 'error':
      return 1;
    case 'warn':
      return 2;
    case 'info':
      return 3;
    case 'debug':
      return 4;
    default:
      return 0;
  }
};

/** Logs a message to the console. Error level. */
const logError = message => {
  if (debugToInt() < 1) return;
  console.error(`[Craftoria] ${message}`);
};

/** Logs a message to the console. Warning level. */
const logWarn = message => {
  if (debugToInt() < 2) return;
  console.warn(`[Craftoria] ${message}`);
};

/** Logs a message to the console. Info level. */
const logInfo = message => {
  if (debugToInt() < 3) return;
  console.info(`[Craftoria] ${message}`);
};

/** Logs a message to the console. Debug level. */
const logDebug = message => {
  if (debugToInt() < 4) return;
  console.debug(`[Craftoria] ${message}`);
};
