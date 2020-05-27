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
  }
};


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      results[char] ? results[char].push(i) : results[char] = [i];
    }
  }

  // for (const [index, char] of sentence.entries()) {
  //   console.log(char);
  //   if (char !== ' ') {
  //     results[char] ? results[char].push(index) : results[char] = [index];
  //   }
  // }

  return results;
};

const word = "hello there"
const results = letterPositions(word);

assertArraysEqual(results['h'], [0, 7]);
assertArraysEqual(results['e'], [1, 8, 10]);
assertArraysEqual(results['l'], [2, 3]);
assertArraysEqual(results['o'], [4]);
assertArraysEqual(results['t'], [6]);
assertArraysEqual(results['r'], [9]);