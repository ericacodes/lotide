const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  }); 
  it("returns 'hello' for ['hello', 'erica'])", () => {
    assert.strictEqual(head(['hello', 'erica']), 'hello');
  });
  it("returns 'one element' for ['one element']", () => {
    assert.strictEqual(head(['one element']), 'one element');
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});