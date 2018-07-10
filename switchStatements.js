/**
 *
 * Switch Statements
 *
 * @param {number} num
 * @return {string}
 */

function switchStatements(num) {
  switch (num) {
    case 1:
      return "ONE";
    case 2:
      return "TWO";
    case 3:
      return "THREE";
    case 4:
      return "FOUR";
    case 5:
      return "FIVE";
    case 6:
      return "SIX";
    case 7:
      return "SEVEN";
    case 8:
      return "EIGHT";
    case 9:
      return "NINE";
    default:
      return "PLEASE TRY AGAIN";
  }
}

// Test
if (require.main === module) {
  console.log(switchStatements(2)); // TWO
  console.log(switchStatements(5)); // FIVE
  console.log(switchStatements(15)); // PLEASE TRY AGAIN
}

module.exports = {
  switchStatements
};
