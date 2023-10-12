function solution(g, s) {
  const cookie = s.sort((a, b) => a - b);
  const children = g.sort((a, b) => a - b);
  let cookieIdx = cookie.length - 1;
  let childrenIdx = children.length - 1;
  let answer = 0;
  while (cookieIdx >= 0 && childrenIdx >= 0) {
    if (cookie[cookieIdx] < children[childrenIdx]) {
      childrenIdx--;
    } else if (cookie[cookieIdx] >= children[childrenIdx]) {
      cookieIdx--;
      childrenIdx--;
      answer++;
    }
  }
  console.log(answer);
}

solution([1, 2], [1, 2, 3]);
solution([1, 2], [1, 1]);
