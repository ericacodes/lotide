const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

assertArraysEqual(flatten([1, [2, 3], 4, [5, 6, 7], 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(flatten([[], [], [], []]), []);
assertArraysEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);