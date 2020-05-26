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

const exists = function(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    } 
  }
  return false;  
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  source.forEach(function(value) {
    if (!exists(value, itemsToRemove)) {
      newArray.push(value);
    }
  });
  return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

assertArraysEqual(without(numbers, [2, 4, 6, 8]), [1, 3, 5, 7, 9]); // test general case
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // test original is unaltered

assertArraysEqual(without(numbers, [11, 0]), numbers); // test items to remove is not in source
assertArraysEqual(without([], [3, 1]), []); // test source is empty
assertArraysEqual(without(numbers, []), numbers); // test items to remove is empty array

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


