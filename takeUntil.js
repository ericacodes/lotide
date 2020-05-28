const takeUntil = function(array, callback) {
  let resultsArr = [];
  for (const element of array) {
    if (callback(element)) {
      return resultsArr;
    }
    resultsArr.push(element);
  }
  return resultsArr;
};

// eqArrays and assertArraysEqual
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("❌❌❌ Assertion Failed");
  }
};

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data1, x => x < -1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
assertArraysEqual(takeUntil([], x => x < 0), []);