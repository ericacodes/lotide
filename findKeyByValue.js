// function implicit return is undefined
const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);

  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;