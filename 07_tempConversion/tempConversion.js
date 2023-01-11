const convertToCelsius = function (farenheit) {
  let degC = Math.round((farenheit - 32) * (5 / 9) * 10) / 10;
  return degC;
};

const convertToFahrenheit = function (celsius) {
  let degF = Math.round((celsius * (9 / 5) + 32) * 10) / 10;
  return degF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
