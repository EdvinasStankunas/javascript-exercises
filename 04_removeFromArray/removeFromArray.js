//This line declares function that can accept multiple arguments and puts them in an array
const removeFromArray = function (a, ...values) {
  //Since the first passed value in values[] is an array that needs to be compared to values array, this puts the first passed value into it's own array
  //Lack of caffeine made me anxious about first value (array) passing into filteredArray, but now I see the obvious.
  const array = a;
  //This line declares a new array which is going to receive the elements that return false value after .includes() method runs
  const filteredArray = array.filter((item) => !values.includes(item));

  /* MY FIRST SOLUTION:
  
  New array that is going to contain wanted values
  const filteredArray = [];
  // scan through all array[] items
  array.forEach((item) => {
    // if values[] does not include current item from array[]
    if (!values.includes(item)) {
      //push said item into filteredArray[]
      filteredArray.push(item);
    }
  });
  // Once the loop is finished, function returns filteredArray[] populated with wanted values. */

  return filteredArray;
};
// Do not edit below this line
module.exports = removeFromArray;
