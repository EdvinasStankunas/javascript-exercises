const sumAll = function (firstArg, secArg) {
  let sum = 0;
  if (
    typeof firstArg != "number" ||
    typeof secArg != "number" ||
    firstArg <= 0 ||
    secArg <= 0
  ) {
    return "ERROR";
  }
  if (firstArg > secArg) {
    const temp = firstArg;
    firstArg = secArg;
    secArg = temp;
  }
  for (let x = firstArg; x < secArg + 1; x++) {
    sum = sum + x;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
