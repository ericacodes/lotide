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

const word = "hello";
const results1 = letterPositions(word);

assertArraysEqual(results1['h'], [0]);
assertArraysEqual(results1['e'], [1]);
assertArraysEqual(results1['l'], [2, 3]);
assertArraysEqual(results1['o'], [4]);