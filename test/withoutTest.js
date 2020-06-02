const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

assertArraysEqual(without(numbers, [2, 4, 6, 8]), [1, 3, 5, 7, 9]); // test general case
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // test original is unaltered

assertArraysEqual(without(numbers, [11, 0]), numbers); // test items to remove is not in source
assertArraysEqual(without([], [3, 1]), []); // test source is empty
assertArraysEqual(without(numbers, []), numbers); // test items to remove is empty array

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);