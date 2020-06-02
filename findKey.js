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

module.exports = findKey;