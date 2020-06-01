const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

const obj1 = { key1: 1, key2: 2 };
const obj2 = { key2: 2, key1: 1 };
const obj3 = { key1: 1, key2: 2, key3: 3 };

assertEqual(eqObjects(obj1, obj2), true);
assertEqual(eqObjects(obj1, obj3), false);

const obj4 = { key1: 3, key2: [2, 3] };
const obj5 = { key2: [2, 3], key1: 3 };
const obj6 = { key1: 1, key2: [2, 3, 4] };

assertEqual(eqObjects(obj4, obj5), true);
assertEqual(eqObjects(obj4, obj6), false);
assertEqual(eqObjects({}, obj4), false);
assertEqual(eqObjects(obj4, {}), false);
assertEqual(eqObjects({}, {}), true);
