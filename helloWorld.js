/**
 *
 * Hello World
 *
 * @return {string}
 */

function helloWorld() {
  let str = "Hello World!";
  return str;
}

// Test
if (require.main === module) {
  console.log(helloWorld());
}

module.exports = {
  helloWorld
};