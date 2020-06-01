const middle = function(array) {
  // if array has one of two elements, return empty array
  if (array.length < 3) {
    return [];
  }
  let index = Math.ceil(array.length / 2) - 1;
  // otherwise, return middle elements in new array
  return (!(array.length % 2))  // returns a number which has a truthy/falsy value
    ? array.splice(index, 2)
    : array.splice(index, 1);
};

module.exports = middle;