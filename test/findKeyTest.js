const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

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