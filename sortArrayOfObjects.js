/**
 *
 * Sort Array of Objects
 *
 * @param {any} arr
 * @return {any}
 */

function sortArrayOfObjects(arr) {
  // Terse version
  return arr.sort((a, b) => a.title > b.title);

  // Explicit version
  // return arr.sort((a, b) => {
  //   if (a.title > b.title) return 1;
  //   else if (b.title < a.title) return -1;
  //   else return 0;
  // });
}

// Test
if (require.main === module) {
  const library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      libraryID: 1254
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      libraryID: 4264
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245
    }
  ];

  console.log(sortArrayOfObjects(library));
}

module.exports = {
  sortArrayOfObjects
};
