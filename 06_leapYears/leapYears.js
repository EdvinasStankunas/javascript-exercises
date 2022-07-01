const leapYears = function (largeYear) {
  if (largeYear % 4 == 0 && largeYear % 100 != 0) {
    return true;
  } else {
    if (largeYear % 400 == 0) {
      return true;
    }
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
