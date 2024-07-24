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
