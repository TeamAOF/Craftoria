// ignored: true
let $SparkLaunchProfiler = Java.loadClass('org.embeddedt.modernfix.spark.SparkLaunchProfiler');
let $SelectWorldScreen = Java.loadClass('net.minecraft.client.gui.screens.worldselection.SelectWorldScreen');
let $ReceivingLevelScreen = Java.loadClass('net.minecraft.client.gui.screens.ReceivingLevelScreen');
let started = false;

NativeEvents.onEvent('net.neoforged.neoforge.client.event.ScreenEvent$Closing', event => {
  if (!started && event.screen instanceof $SelectWorldScreen) {
    console.log('Starting ModernFix Spark Profiler...');
    $SparkLaunchProfiler.start('menu_to_ingame');
    started = true;
  }
  if (started && event.screen instanceof $ReceivingLevelScreen) {
    console.log('Stopping ModernFix Spark Profiler...');
    $SparkLaunchProfiler.stop('menu_to_ingame');
    started = false;
  }
});
