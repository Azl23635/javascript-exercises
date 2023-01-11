const reverseString = function (string) {
  let tmp = '';
  for (let i = string.length - 1; i >= 0; i--) {
    tmp += string[i];
  }
  return tmp;
};
// Do not edit below this line
module.exports = reverseString;
