class MinMaxStack {
  constructor() {
      this.stack = [];
      this.minStack = [];
      this.maxStack = [];
  }

  // Add an element to the top of the stack
  push(element) {
      this.stack.push(element);

      if (this.minStack.length === 0 || element <= this.getMin()) {
          this.minStack.push(element);
      }

      if (this.maxStack.length === 0 || element >= this.getMax()) {
          this.maxStack.push(element);
      }
  }

  // Remove and return the top element of the stack
  pop() {
      const element = this.stack.pop();

      if (element === this.getMin()) {
          this.minStack.pop();
      }

      if (element === this.getMax()) {
          this.maxStack.pop();
      }

      return element;
  }

  // Get the minimum element in the stack
  getMin() {
      if (this.minStack.length === 0) return null;
      return this.minStack[this.minStack.length - 1];
  }

  // Get the maximum element in the stack
  getMax() {
      if (this.maxStack.length === 0) return null;
      return this.maxStack[this.maxStack.length - 1];
  }
}