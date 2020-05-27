const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function implicit return is undefined
const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);

  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

const emptyTVShowList = {};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(emptyTVShowList, "That '70s Show"), undefined);

const keysWithSameValue = {
  key1: "hello",
  key2: "world",
  key3: "hello"
};

assertEqual(findKeyByValue(keysWithSameValue, "hello"), "key1");