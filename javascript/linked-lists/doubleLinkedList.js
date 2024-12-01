// double has more space complexity that single linked list

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
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
    const newNode = new DoubleNode(val);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  prepend(val) {
    const newNode = new DoubleNode(val);
    newNode.next = this.head;
    this.head.prev = newNode;

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
    const newNode = new DoubleNode(value);
    const leader = this.traverseToIndex(index - 1);
    const nextNode = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = nextNode;
    nextNode.prev = newNode;
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

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 0);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
