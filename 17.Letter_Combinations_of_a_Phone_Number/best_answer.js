function solution(digits) {
  const digitObj = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };
  const answer = [];
  const len = digits.length;
  const dfs = (str, pos) => {
    if (pos === len) answer.push(str);
    else {
      let letters = digitObj[digits[pos]];
      for (let i = 0; i < letters.length; i++) {
        dfs(str + letters[i], pos + 1);
      }
    }
  };
  dfs("", 0);
  console.log(answer);
}

console.log(solution("23"));
