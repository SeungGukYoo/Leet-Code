function solution(n) {
  let count = 0;
  let queue = [];

  queue.push(["(", n - 1, n]);

  while (queue.length) {
    let tmp = [];
    for (let x of queue) {
      let [el, lt, rt] = x;
      if (lt === 0 && rt === 0) {
        const answer = queue.map((el) => {
          return el[0];
        });

        return answer;
      }
      if (rt <= lt) {
        tmp.push([el + "(", (lt -= 1), rt]);
      } else {
        rt !== 0 && tmp.push([el + ")", lt, rt - 1]);
        lt !== 0 && tmp.push([el + "(", lt - 1, rt]);
      }
    }

    queue = tmp;
    count++;
  }
}

console.log(solution(3));
console.log(solution(1));
