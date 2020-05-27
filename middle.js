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
    //console.log("❌❌❌ Assertion Failed: " + array1 + " !== " + array2);
    // console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  // if array has one of two elements, return empty array
  if (array.length < 3) {
    return [];
  }
  let index = Math.ceil(array.length / 2) - 1;
  // otherwise, return middle elements in new array 
  return (!(array.length % 2))  // returns a number which has a truthy/falsy value 
    ? array.splice(index, 2)
    : array.splice(index, 1);
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);