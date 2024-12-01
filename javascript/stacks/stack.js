class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new StackNode(value);
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const ptr = this.top;
      this.top = newNode;
      this.top.next = ptr;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      console.log("The stack is empty.");
      return null;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
    }

    const nextNode = this.top.next;
    this.top = nextNode;
    this.length--;
    return this;
  }

  isEmpty() {
    // todo
    if (this.top === null) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
console.log("stack", myStack);

console.log(myStack.isEmpty());
