/**
 *
 * If Else Statements
 *
 * @param {number} marks
 * @return {string}
 */

function ifElseStatements(marks) {
  if (marks > 90) {
    return "AA";
  } else if (marks > 80) {
    return "AB";
  } else if (marks > 70) {
    return "BB";
  } else if (marks > 60) {
    return "BC";
  } else if (marks > 50) {
    return "CC";
  } else if (marks > 40) {
    return "CD";
  } else if (marks > 30) {
    return "DD";
  } else {
    return "FF";
  }
}

// Test
if (require.main === module) {
  console.log(ifElseStatements(33)); // DD
  console.log(ifElseStatements(92)); // AA
}

module.exports = {
  ifElseStatements
};