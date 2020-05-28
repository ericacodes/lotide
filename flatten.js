const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) { // for in on array gives indices, object is keys
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("❌❌❌ Assertion Failed");
  }
};

const flatten = function(arrayToFlatten) {
  let arrayFlattened = [];
  for (const element of arrayToFlatten) {
    if (Array.isArray(element)) {
      Array.prototype.push.apply(arrayFlattened, element); // what if I didnt use this built in function?
    } else {
      arrayFlattened.push(element);
    }
  }
  return arrayFlattened;
};

assertArraysEqual(flatten([1, [2, 3], 4, [5, 6, 7], 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(flatten([[], [], [], []]), []);
assertArraysEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);