// priority: 2147483647
// Global variables/functions used in client_scripts

const toMcCase = str => {
  const parts = str.split(/[\s_\-.:/]+/);
  return parts.map(part => Utils.toTitleCase(part)).join(' ');
};
