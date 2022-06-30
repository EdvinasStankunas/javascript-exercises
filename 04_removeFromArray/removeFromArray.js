const removeFromArray = function (...values) {
  /* This line declares function that can accept multiple arguments and puts them in an array */
  const array =
    values.shift(); /*Since the first passed value in values[] is an array that needs to be compared to values array, this needs to take it out of the values array */
  const newArray = []; /* New array that is going to contain wanted values */
  array.forEach((item) => {
    /* scan through all array[] items */
    if (!values.includes(item)) {
      /* if values[] does not include current item from array[]*/
      newArray.push(item); /*push said item into a newArray[] */
    }
  });
  return newArray; /* Once the loop is finished, function returns newArray[] populated with wanted values. */
};
// Do not edit below this line
module.exports = removeFromArray;
