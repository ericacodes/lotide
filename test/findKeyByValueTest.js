const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

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