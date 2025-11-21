// priority: 2147483647
// Global variables/functions used in client_scripts

/**
  * @param {string} str
  * @returns {string}
  */
const toMcCase = str => {
  const parts = str.split(/[\s_\-.:/]+/);
  return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
};
