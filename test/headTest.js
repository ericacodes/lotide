const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1, 3, 5]), 1);
assertEqual(head(["hello", "erica"]), "hello");
assertEqual(head(["one element"]), "one element");
assertEqual(head([]), undefined);