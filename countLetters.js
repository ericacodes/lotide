const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  const results = {};
  const stringLower = string.toLowerCase();
  for (const char of stringLower) {
    if (char !== ' ') {
      results[char] ? results[char] += 1 : results[char] = 1;
    }
  }

  return results;
};

module.exports = countLetters;
