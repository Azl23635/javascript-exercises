const sumAll = function (val1, val2) {
  if (val1 >= 0 && val2 >= 0) {
    //Error checks: -Non negative
    if (
      typeof val1 === 'number' && //-Type
      typeof val2 === 'number' &&
      arguments.length === 2 //-No. of arguments
    ) {
      if (val1 == val2) {
        return val1;
      }
      let result = 0;
      let smallVal = 0;
      let largeVal = 0;
      val1 > val2 //Find larger and smaller argument
        ? ((largeVal = val1), (smallVal = val2))
        : ((largeVal = val2), (smallVal = val1));
      for (let i = smallVal; i <= largeVal; i++) {
        result += i;
      }
      return result;
    }
    return 'ERROR';
  }
  return 'ERROR';
};
// Do not edit below this line
module.exports = sumAll;
