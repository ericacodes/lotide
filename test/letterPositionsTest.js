const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const word = "hello there"
const results = letterPositions(word);

assertArraysEqual(results['h'], [0, 7]);
assertArraysEqual(results['e'], [1, 8, 10]);
assertArraysEqual(results['l'], [2, 3]);
assertArraysEqual(results['o'], [4]);
assertArraysEqual(results['t'], [6]);
assertArraysEqual(results['r'], [9]);