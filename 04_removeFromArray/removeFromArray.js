//This line declares function that can accept multiple arguments and puts them in an array
const removeFromArray = function (array, ...values) {
  //This line declares a new array which is going to receive the elements that return false value after .includes() method runs
  const filteredArray = array.filter((item) => !values.includes(item));

  /* MY FIRST SOLUTION :
  
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
