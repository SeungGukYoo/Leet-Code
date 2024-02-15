/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let str = "";
  while (num > 0) {
    str += num % 2;
    num = Math.floor(num / 2);
  }

  let convert = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str[i] === "0" ? (convert += "1") : (convert += "0");
  }

  return parseInt(convert, 2);
};

// console.log(findComplement(5));
// console.log(findComplement(1));
console.log(findComplement(2));
