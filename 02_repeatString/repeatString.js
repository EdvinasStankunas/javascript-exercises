const repeatString = function (string, repeatCount) {
  if (repeatCount < 0) return "ERROR";
  let repeatedString = "";
  for (let i = 0; i < repeatCount; i++) {
    repeatedString += string;
  }
  return repeatedString;
};
// Do not edit below this line
module.exports = repeatString;
