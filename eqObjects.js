const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  // for (const key in object1) {
  for (const key of keys1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // else if bc we don't want to enter this condition if arrays were equal
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

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
