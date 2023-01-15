const palindromes = function (str) {
  const REG_CHECK = /[^\d|\w]/gi;
  let formattedStr = str.replaceAll(REG_CHECK, '').toLowerCase();

  //Reverse second half of string
  let strSecondHalf = formattedStr
    .substring(
      Math.ceil(formattedStr.length / 2),
      formattedStr.length
    )
    .split('')
    .reverse()
    .join('');
  return (
    formattedStr.substring(0, Math.floor(formattedStr.length / 2)) ===
    strSecondHalf
  );
};

// Do not edit below this line
module.exports = palindromes;
