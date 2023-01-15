const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr1) {
  return arr1.reduce((accumulated, curr) => accumulated + curr, 0);
};

const multiply = function (arr1) {
  return arr1.reduce((accumulated, curr) => accumulated * curr, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
