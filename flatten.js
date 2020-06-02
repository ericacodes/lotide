const flatten = function(arrayToFlatten) {
  let arrayFlattened = [];
  for (const element of arrayToFlatten) {
    if (Array.isArray(element)) {
      Array.prototype.push.apply(arrayFlattened, element); // what if I didnt use this built in function?
    } else {
      arrayFlattened.push(element);
    }
  }
  return arrayFlattened;
};

module.exports = flatten;