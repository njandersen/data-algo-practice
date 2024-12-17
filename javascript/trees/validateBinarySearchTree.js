const traverse = (node, min, max) => {
  if (node.val <= min || node.val >= max) {
    return false;
  }

  if (node.left) {
    if (!traverse(node.left, min, node.val)) {
      return false;
    }
  }

  if (node.right) {
    if (!traverse(node.right, node.val, max)) {
      return false;
    }
  }

  return true;
};

function isValidBST(root) {
  if (!root) return true;
  return traverse(root, -Infinity, Infinity);
}
