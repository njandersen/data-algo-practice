// Given a doubly linked list, list nodes also have a child
// property taht can point to a separate doubly linked list.
// These child lists can also have on or more child doubly
// linked lists of their own, and so on.
//
// Return the list as a single level falttened doubly linked list
//
// class ListsNode {
//    value: any,
//    prev: ListNode,
//    next: ListNode,
//    child: null, can point to the head of another doubly linked list.
// }
//
// 1 <--> 2 <--> 3 <-> 4  <-> 5 <-> 6
//        |                   |
//        7 <-> 8 <-> 9       12 <-> 13
//              |
//              10 <-> 11
//

function flatten(head) {
  if (!head) {
    return head;
  }

  let currNode = head;

  while (currNode !== null) {
    if (currNode.child) {
      let tail = currNode.child;

      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currNode.next;
      if (tail.next != null) {
        tail.next.prev = tail;
      }
      currNode.next = currNode.child;
      currNode.next.prev = currNode;
      currNode.child = null;
    } else {
      currNode = currNode.next;
    }
  }

  return head;
}
