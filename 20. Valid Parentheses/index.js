/**
 * @param {string} s
 * @return {boolean}
 */
function solution(s) {
  const stack = [];
  for (let x of s) {
    console.log(x);
    if (x === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (x === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (x === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else stack.push(x);
  }
  return stack.length ? false : true;
}
