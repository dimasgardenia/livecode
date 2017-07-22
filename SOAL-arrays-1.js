// Array 1 Competency Test

function numberCruncher(numberArr) {
  // Code hanya disini
var sum = 0;
var result = [];
for (var i = 0; i < numberArr.length; i++) {
  sum += numberArr[i];
}

for (var i = 0; i < numberArr.length; i++) {
  result.push(sum - numberArr[i]);
}
}

console.log(numberCruncher([7, 1, 0, 4])); // [ 8, 8, 5, 4 ]
// console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // [ 5, 6, 8, 6, 10, 6, 8, 3 ]
// console.log(numberCruncher([1, 3, 2, 5, 6, 0])); // [ 4, 6, 10, 13, 11, 6 ]
// console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // [ 1, 1, 2, 1, 2, 1, 2, 1, 2, 1 ]
// console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // [ 9, 17, 23, 18, 12, 6, 5 ]
