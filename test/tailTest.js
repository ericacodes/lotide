const assertEqual = require('../assertEqual');
const tail = require('../tail');

const resultArr = tail([1, 2, 3]);
assertEqual(resultArr.length, 2);
assertEqual(resultArr[0], 2);
assertEqual(resultArr[1], 3);

const resultOne = tail(["one element"]);
assertEqual(resultOne.length, 0);

const resultZero = tail([]);
assertEqual(resultZero.length, 0);