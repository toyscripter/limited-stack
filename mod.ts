export class LimitedStack<T> {
  private items: T[] = [];
  private limit: number;

  constructor(limit: number = 100) {
    this.limit = limit;
  }

  // Push a new item onto the stack
  push(item: T): void {
    if (this.items.length >= this.limit) {
      this.items.shift(); // Remove the oldest item if limit is exceeded
    }
    this.items.push(item);
  }

  // Pop the most recent item from the stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // Get the most recent item without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Get all items in the stack
  getAll(): T[] {
    return [...this.items];
  }

  // Get the current size of the stack
  size(): number {
    return this.items.length;
  }

  // Clear the stack
  clear(): void {
    this.items = [];
  }
}
