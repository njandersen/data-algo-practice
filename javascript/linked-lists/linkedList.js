/*
    first node called head, last node is tail. They are null permeating.
    Start at head then traverse the list until you get to the index you
    are looking for. 
    Scattered all over memory makes looping over slower. 

    prepend O(1)
    append  O(1)
    lookup  O(n)
    insert  O(n) ---| worst case
    delete  O(n) ---| 
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currNode = this.head;

    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }

    return currNode;
  }

  append(val) {
    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currNode = this.head;
    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    return arr;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const nextNode = leader.next;

    leader.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      const nextNode = this.head.next;
      this.head = nextNode;
      this.length--;
      return this.printList();
    }

    if (index === this.length - 1) {
      const prevNode = this.traverseToIndex(index - 1);
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
      return this.printList();
    }

    if (index >= this.length) {
      console.log("error, index out of bounds");
      return undefined;
    }

    const leader = this.traverseToIndex(index - 1);
    const currNode = leader.next;

    leader.next = currNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 0);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
