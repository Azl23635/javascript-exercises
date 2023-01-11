const removeFromArray = function (args) {
  let tmp = arguments[0];
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      if (tmp.includes(arguments[i])) {
        tmp.splice(tmp.indexOf(arguments[i]), 1);
      }
    }
  }
  return tmp;
};

// Do not edit below this line
module.exports = removeFromArray;
