/**
 * @param {string} s = "IDID"
 * @return {number[]} [0,4,1,3,2]
 */
var diStringMatch = function (s) {
  const answer = [];

  let increaseNum = 0;
  let decreasNum = s.length;

  for (let i = 0; i < s.length + 1; i++) {
    if (s[i] === "I") {
      answer.push(increaseNum++);
    } else {
      answer.push(decreasNum--);
    }
  }

  return answer;
};

diStringMatch("IDID");
diStringMatch("III");
diStringMatch("DDI");
