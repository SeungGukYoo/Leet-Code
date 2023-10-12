function solution(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) i += 1;
    else if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        n--;
        i += 1;
      }
    }
  }

  return n <= 0 ? true : false;
}

// console.log(solution([1, 0, 0, 0, 0, 1, 0, 0], 2));
console.log(solution([0, 0, 1, 0, 0], 1));
