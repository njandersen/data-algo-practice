// Given a binary tree, find its maximum depth.
//
// maximum depth is the number of nodes along the logest path from the root node
// to the furthest leaf node
//
// return zero if tree is empty

const recursiveDepth = (node, count) => {
  if (node === null) {
    return count;
  }
  count++;

  return Math.max(
    recursiveDepth(node.left, count),
    recursiveDepth(node.right, count),
  );
};

function maxDepth(root) {
  if (root.left === null && root.right === null) {
    return 1;
  }

  if (root === null) {
    return 0;
  }

  let count = 0;
}
