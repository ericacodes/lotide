const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let result = true;
    for (let i = 0; i < array1.length; i++) {
      result = result && array1[i] === array2[i];
    }
    return result;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("❌❌❌ Assertion Failed");
    // console.log("❌❌❌ Assertion Failed: " + array1 + " !== " + array2);
    // console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else {
    let index = Math.ceil(array.length / 2) - 1;
    if (array.length % 2 === 0) {
      return array.splice(index, 2);
    } else {
      return array.splice(index, 1);
    }
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);