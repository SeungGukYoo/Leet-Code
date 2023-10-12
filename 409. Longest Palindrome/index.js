function solution(s) {
  let answer = 0;
  const map = new Map();
  for (let x of s) {
    map.set(x, map.get(x) ? map.get(x) + 1 : 1);
    if (map.get(x) % 2 === 0) {
      answer += 2;
      map.delete(x);
    }
  }
  if (map.size) answer += 1;
  return answer;
}

solution("abccccdd");
// solution("a");
