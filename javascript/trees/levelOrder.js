// Given a binary tree, return the level order
// traversal of the nodes values as an array.
// Level order is the values at a given level in a tree

// We need to keep track of the level we are on.
// We need an overall answer array to push new arrays to.
// Each time we go to a new child we need to increment our level.
// We need a recursive function that evalutate the left and right of each node then adds
// them to the overall answsers array

function levelOrder(root) {
  if (!root) return [];
  let currNode = root;
  let result = [];
  let queue = [];
  queue.push(currNode);

  while (queue.length > 0) {
    let queueLength = queue.length;
    let levelCount = 0;
    const list = [];

    while (levelCount < queueLength) {
      currNode = queue.shift();
      list.push(currNode.value);
      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }

      levelCount++;
    }
    result.push(list);
  }

  return result;
}
