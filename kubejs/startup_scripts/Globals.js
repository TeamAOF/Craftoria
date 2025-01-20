const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');

global.dyeColors = $DyeColor.values().map((color) => color.toString().toLowerCase());
