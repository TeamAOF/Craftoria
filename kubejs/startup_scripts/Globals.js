const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');

global.dyeColors = $DyeColor.values().map((color) => color.toString().toLowerCase());

/**
 * Enables a few scripts that are only useful for development.
 * Make sure to disable this in production/before pushing to git.
 */
global.devEnv = false;
