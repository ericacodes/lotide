const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) { // bracket notation must be used for keys stored in variables
      return key;
    }
  }

  // Using a forEach loop:

  /*
  let result;
  keys.forEach(key => {
    if (callback(object[key]) && !result) // undefined is falsy
    result = key;
  });
  return result;
  */

};

// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases
const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(testObj, x => x.stars === 2), "noma");
assertEqual(findKey(testObj, x => x.stars === 4), undefined);
assertEqual(findKey({}, x => x.stars === 4), undefined);


