const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(array) {
  return array[0];
}

assertEqual(head([1, 3, 5]), 1);
assertEqual(head(["hello", "erica"]), "hello");
assertEqual(head(["one element"]), "one element");
assertEqual(head([]), undefined);