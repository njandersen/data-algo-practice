// Moves left to right across all levels of a binary tree.

function breadthFirstSearch(node) {
  let currNode = node;
  let list = [];
  let queue = [];
  queue.push(currNode);

  while (queue.length > 0) {
    currNode = queue.shift();
    list.push(currNode.value);
    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }

  return list;
}
