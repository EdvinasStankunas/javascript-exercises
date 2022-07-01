const sumAll = function (rangeStart, rangeEnd) {
  let sum = 0;
  if (
    typeof rangeStart !== "number" ||
    typeof rangeEnd !== "number" ||
    rangeStart <= 0 ||
    rangeEnd <= 0
  ) {
    return "ERROR";
  }

  const min = Math.min(rangeStart, rangeEnd);
  const max = Math.max(rangeStart, rangeEnd);

  /*if (rangeStart > rangeEnd) {
    const temp = rangeStart;
    rangeStart = rangeEnd;
    rangeEnd = temp;
  }*/

  for (let x = min; x < max + 1; x++) {
    sum = sum + x;
  }

  return sum;
};
// Do not edit below this line
module.exports = sumAll;
