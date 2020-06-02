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

module.exports = takeUntil;