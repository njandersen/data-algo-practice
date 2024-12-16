// Three ways to implement.
// inorder --> returns values in order
// preorder --> return all values after the root node in order
// postorder --> returns all values after the root in order then the root is last

function DFSInorder(node, list) {
  if (node.left) {
    DFSInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    DFSInorder(node.right, list);
  }

  return list;
}

function DFSPreorder(node, list) {
  list.push(node.value);

  if (node.left) {
    DFSPreorder(node.left, list);
  }

  if (node.right) {
    DFSPreorder(node.right, list);
  }

  return list;
}

function DFSPostorder(node, list) {
  if (node.left) {
    DFSPostorder(node.left, list);
  }

  if (node.right) {
    DFSPostorder(node.right, list);
  }
  list.push(node.value);

  return list;
}
