// Normal recursion space: O(n)
// Tail recursion space : O(1)
//
// Recursion Sorting:
// Given an unsorted array return the kth largest
// element. It is the kth largest element in sorted
// order not the kth distinct element
//
// Test Cases:
// [5,3,1,6,4,2] k=2 --> [1,2,3,4,5,6] 5 is the kth largest
// [2,3,1,2,4,2] k=4 --> [1,2,2,2,3,4] 2 is the kth largest
// [3] k=1 --> 3

//function findKthLargest(nums, k) {
// nums.sort();

//return nums[nums.length - k];
//}

// Hoare's Quick Select algorithm:
// Finds the kth smallest element in an unordered list

function quickSelect(array, left, right, indexToFind) {
  if (left < right) {
    const partition = getPartition(array, left, right);
    if (partition === indexToFind) {
      return array[partition];
    } else if (indexToFind < partition) {
      return quickSelect(array, left, partition - 1, indexToFind);
    } else {
      return quickSelect(array, right, partition + 1, indexToFind);
    }
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function getPartition(array, left, right) {
  const pivot = array[right];
  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, right);

  return partitionIndex;
}

function quickSort(array, left, right) {
  if (left < right) {
    const partition = getPartition(array, left, right);
    quickSort(array, left, partition - 1);
    quickSort(array, partition + 1, right);
  }
}

function findKthLargest(nums, k) {
  const indexToFind = nums.length - k;
  quickSelect(nums, 0, nums.length - 1, indexToFind);

  return nums[indexToFind];
}

const test1 = [5, 3, 1, 6, 4, 2];
const k1 = 2;
const result = findKthLargest(test1, k1);
console.log("result", result);
