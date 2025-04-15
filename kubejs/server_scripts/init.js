// priority: 2147483647
// Global variables used in server_scripts

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
 * Toggles debug mode, make sure to set this to false when not in dev environment
 * it will spam the console with a lot of information
 * Different toggles:
 * - false: Disables debug mode
 * - 'all': Enables all debug messages
 * - 'deprecation': Enables deprecation debug messages
 * - 'unify': Enables all unify debug messages
 */
const debug = false;

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
  output = output.split(':')[1].replace(' ', '_');
  input = input.split(':')[1].replace(' ', '_');

  if (type.includes(':')) type = type.split(':')[1];

  //console.info(`ID: craftoria:${mod}/${type}/${output}_from_${input}`);
  return `craftoria:${mod}/${type}/${output}_from_${input}`;
};
