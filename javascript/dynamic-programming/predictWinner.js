const recursive = () => {
  const cache = [];
  for (let i = 0; i < 1000; i++) {
    cache[i] = [];
  }
  return function maxDiff(left, right, nums) {
    if (left === right) return nums[left];
    if (cache[left][right] !== undefined) return cache[left][right];

    const scoreLeft = nums[left] - maxDiff(left + 1, right, nums);
    const scoreRight = nums[right] - maxDiff(left, right - 1, nums);
    const result = Math.max(scoreLeft, scoreRight);
    cache[left][right] = result;

    return result;
  };
};

function predictTheWinner(nums) {
  const answer = recursive();

  return answer(0, nums.length - 1, nums) >= 0;
}
