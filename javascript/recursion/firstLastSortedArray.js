function binarySearchExample(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let foundVal = array[mid];
    if (foundVal === target) {
      return foundVal;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function binarySearch(array, left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = array[mid];

    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Given an array of ints sorted in ascending order, return the starting and ending index of a
// given target value in an array i.e. [x,y]
//
// Test Cases:
// [1,3,3,5,5,5,8,9] t=5 --> [3,5]
// [1,2,3,4,5,6] t=4 --> [3,3]
// [1,2,3,4,5] t=9 --> [-1,-1]
// [] t=2 --> [-1, -1]

function findFirstLast(nums, target) {
  if (nums.length < 1) return [-1, -1];
  const first = binarySearch(nums, 0, nums.length - 1, target);

  if (first === -1) return [-1, -1];

  let end = first,
    start = first,
    temp1,
    temp2;

  while (start !== -1) {
    temp1 = start;
    start = binarySearch(nums, 0, start - 1, target);
  }
  start = temp1;

  while (end !== -1) {
    temp2 = end;
    end = binarySearch(nums, end + 1, nums.length - 1, target);
  }
  end = temp2;

  return [start, end];
}
