//Given an array = [2, 5, 1, 2,3,5,1,2,4]
// return first recurring char
// above should return 2

function firstRecurringChar(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] !== undefined) {
      return arr[i];
    }
    result[arr[i]] = i;
  }

  return -1;
}

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];

console.log(firstRecurringChar(array));
