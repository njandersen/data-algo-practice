function reverseLinkedList(head) {
  if (head.next === null) {
    return head;
  }

  let currNode = head;
  let prev = null;

  while (currNode) {
    let next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }
  return prev;
}

// Given a linked list and number left and right return it back with only positions left to right in reverse
//

function reverseSectionLinkedList(head, left, right) {
  if (head.next === null) {
    return head;
  }

  let currNode = head;
  let position = 1;
  let start = head;

  while (position < left) {
    start = currNode;
    currNode = currNode.next;
    position++;
  }

  let newList = null;
  let tail = currNode;

  while (position >= left && position <= right) {
    let next = currNode.next;
    currNode.next = newList;
    newList = currNode;
    currNode = next;
    position++;
  }

  start.next = newList;
  tail.next = currNode;

  return left > 1 ? head : newList;
}
