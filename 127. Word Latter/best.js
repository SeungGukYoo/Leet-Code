var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const nextQueue = [];

    for (let word of queue) {
      if (word === endWord) return steps;

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
          if (wordSet.has(newWord)) {
            nextQueue.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = nextQueue;
    steps++;
  }
  return 0;
};
