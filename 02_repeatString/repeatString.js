const repeatString = function (string, number) {
  if (number < 0) return "ERROR";
  let answer = "";
  for (let i = 0; i < number; i++) {
    answer = answer + string;
  }
  return answer;
};
// Do not edit below this line
module.exports = repeatString;
