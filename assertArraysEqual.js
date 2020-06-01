const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("❌❌❌ Assertion Failed");
    // console.log("❌❌❌ Assertion Failed: " + array1 + " !== " + array2);
    // console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;