/**
 *
 * Print The Input
 *
 * @param {string} str
 * @return {string}
 */

function helloWorld(str) {
  return str;
}

// Test
if (require.main === module) {
  console.log(helloWorld("How many chickens does it take to cross the road ?"));
}

module.exports = {
  helloWorld
};