// For a given staircase, the i-th step is assigned a
// non-neg cost indicated by a cost array.
//
// Once you pay the cost for a step you can either
// climb one or two steps. Find the minimum cost to
// reach the top of the staircase. Your first step can
// either be the first or second step.
//
// Recognize it's a dynamic programming problem
// If you see min or max its probably an optomization question
// which means use dynamic programming
//
// Find Recurrence Relation:
// Formula for the basis of a recursive solution

const minCost = () => {
  const cache = [];
  return function min(i, cost) {
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];

    if (cache[i] !== undefined) return cache[i];
    cache[i] = cost[i] + Math.min(min(i - 1, cost), min(i - 2, cost));
    return cache[i];
  };
};

function minCostClimbingStairs(cost) {
  const n = cost.length;

  const answer = minCost();

  return Math.min(answer(n - 1, cost), answer(n - 2, cost));
}
