/**
 * input height: [1,8,6,2,5,4,8,3,7]
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let lt = 0,
    rt = height.length - 1;
  let maxArea = 0;

  while (lt <= rt) {
    let row = rt - lt;

    let col = Math.min(height[lt], height[rt]);

    let currentArea = row * col;
    maxArea = Math.max(maxArea, currentArea);

    if (height[lt] > height[rt]) {
      rt -= 1;
    } else {
      lt += 1;
    }
  }
  return maxArea;
};
