var ladderLength = function (beginWord, endWord, wordList) {
  const checkArray = Array.from({ length: wordList.length }, () => false);
  let queue = [beginWord];
  let count = 1;
  let findTarget = false;
  while (queue.length) {
    let pairWords = new Set();
    for (let word of queue) {
      if (word === endWord) findTarget = true;
      wordList.forEach((compareWord, idx) => {
        let sameCount = 0;
        if (!checkArray[idx]) {
          for (let i = 0; i < word.length; i++) {
            if (word[i] === compareWord[i]) sameCount++;
          }
          if (sameCount >= word.length - 1) {
            pairWords.add(compareWord);
            checkArray[idx] = true;
          }
        }
      });
    }
    if (findTarget) break;
    count++;

    queue = [...pairWords];
  }

  return findTarget ? count : 0;
};
