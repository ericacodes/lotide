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

module.exports = without;