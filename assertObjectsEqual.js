const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true; 
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ?
              `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` :
              `❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const obj4 = { key1: 3, key2: [2, 3] };
const obj5 = { key2: [2, 3], key1: 3 };
const obj6 = { key1: 1, key2: [2, 3, 4] };

assertObjectsEqual({}, {}); // true
assertObjectsEqual({}, obj4); // false
assertObjectsEqual(obj4, obj5); // true
assertObjectsEqual(obj4, obj6); // false