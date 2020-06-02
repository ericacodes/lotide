const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      results[char] ? results[char].push(i) : results[char] = [i];
    }
  }

  // for (const [index, char] of sentence.entries()) {
  //   console.log(char);
  //   if (char !== ' ') {
  //     results[char] ? results[char].push(index) : results[char] = [index];
  //   }
  // }

  return results;
};

module.exports = letterPositions; 