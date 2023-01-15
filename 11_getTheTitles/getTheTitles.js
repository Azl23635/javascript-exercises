const getTheTitles = function (arr) {
  const output = arr.map((obj) => {
    if (obj.hasOwnProperty('title')) {
      return obj.title;
    }
  });
  return output;
};

// Do not edit below this line
module.exports = getTheTitles;
