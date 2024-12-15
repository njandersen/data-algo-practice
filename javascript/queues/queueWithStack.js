// Implement the class Queue using stacks.
// the queue methods you need to implement are enqueue, dequeue, peek and empty.

class MyQueue {
  constructor() {
    this.stack = [];
    this.reversedStack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    if (this.reversedStack.length === 0) {
      while (this.stack.length > 0) {
        this.reversedStack.push(this.stack.pop());
      }
    }

    return this.reversedStack.pop();
  }

  peek() {
    if (this.reversedStack.length === 0) {
      while (this.stack.length > 0) {
        this.reversedStack.push(this.stack.pop());
      }
    }

    return this.reversedStack[this.reversedStack.length - 1];
  }

  empty() {
    return this.stack.length === 0 && this.reversedStack === 0;
  }
}
