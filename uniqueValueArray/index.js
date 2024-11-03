// const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

// const uniqueArray = arr.filter(
//   (value, index, self) => self.indexOf(value) === index
// );

// console.log(uniqueArray);
// Écris une fonction qui prend un tableau en argument et retourne un tableau contenant uniquement des valeurs uniques.
// .uniqueValues(arr); // [1, 2, 3, 4, 5, 6, 7]

//En utilisant Set

function uniqueValues(arr) {
  return [...new Set(arr)];
}

const array = [1, 2, 3, 4, 5, 6, 7, 7, 6, 5];
console.log(uniqueValues(array)); // [1, 2, 3, 4, 5, 6, 7]
