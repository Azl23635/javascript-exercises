const fibonacci = function (sequence) {
  const input = parseInt(sequence);
  if (input > 0) {
    let prevPrev = 0;
    let prev = 0;
    let now = 1;
    let tmp = 0;
    if (input > 2) {
      for (let i = 2; i <= input; i++) {
        tmp = now;
        now = now + prev;
        prevPrev = prev;
        prev = tmp;
      }
    }
    return now;
  } else if (input < 0) {
    return 'OOPS';
  }
  return 0;
};
fibonacci(10);
// Do not edit below this line
module.exports = fibonacci;
