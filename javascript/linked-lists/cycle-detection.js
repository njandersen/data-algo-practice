//         --4--5
// 1--2--3       -6
//         --8--7
//

function detectCycle(head) {
  const seenNodes = new Set();

  let currNode = head;

  while (currNode) {
    if (seenNodes.has(currNode)) {
      return currNode;
    }
    seenNodes.add(currNode);
    currNode = currNode.next;
  }

  return null;
}

// Floyds tortoise and hare algorithm:
// two pointers, slow and fast. Slow (tortoise) moves 1 step while the fast(hare) moves 2 steps each iteration.
//

function flyodTortoiseHareDetectCycle(head) {
  let fast = head,
    slow = head;

  while (true) {
    fast = fast.next;
    slow = slow.next;

    if (fast === null || fast.next === null) {
      return false;
    } else {
      fast = fast.next;
    }

    if (slow === fast) break;
  }

  let p1 = head;
  let p2 = slow;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}
