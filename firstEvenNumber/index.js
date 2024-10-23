// Trouver le premier nombre pair dans un tableau

const numbers = [1, 3, 7, 8, 10];

const findFirstEven = numbers.find((e) => e % 2 === 0);

// const findFirstEven = [];
// numbers.forEach((e) => {
//   if (e % 2 === 0) findFirstEven.push(e);
// });

console.log(findFirstEven);
