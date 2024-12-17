// Given a binary tree imagin you're standing to the right of
// the tree. Return an array of the values of the nodes you can see ordered
// from top to bottom.

function DFSPreorder(node, list, level) {
  if (level >= list.length) {
    list.push(node.val);
  }
  level++;

  if (node.right) {
    DFSPreorder(node.right, list, level);
  }
  if (node.left) {
    DFSPreorder(node.left, list, level);
  }

  return list;
}

function rightSideView(root) {
  if (!root) return [];
  let level = 0;
  const answer = [];

  return DFSPreorder(root, answer, level);
}
