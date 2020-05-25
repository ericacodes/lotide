const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

const one = tail(["one element"]);
console.log(one);
assertEqual(one.length, 0);

const zero = tail([]);
console.log(zero);
assertEqual(zero.length, 0);
