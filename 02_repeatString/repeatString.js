const repeatString = function (string, repeats) {
  if (repeats >= 0) {
    let str = '';
    for (let i = 0; i < repeats; i++) {
      str += string;
    }
    return str;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
