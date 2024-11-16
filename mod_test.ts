import { LimitedStack } from "./mod.ts";
import { assertEquals, assertStrictEquals } from "@std/assert";

Deno.test("LimitedStack - push and pop functionality", () => {
  const stack = new LimitedStack<number>(5);
  stack.push(1);
  stack.push(2);
  assertEquals(stack.pop(), 2); // Pop the most recent item
  assertEquals(stack.pop(), 1); // Pop the next item
  assertEquals(stack.pop(), undefined); // Stack is now empty
});

Deno.test("LimitedStack - peek functionality", () => {
  const stack = new LimitedStack<number>(3);
  stack.push(10);
  stack.push(20);
  assertStrictEquals(stack.peek(), 20); // Peek should return the most recent item
  assertStrictEquals(stack.size(), 2); // Peek should not remove items
});

Deno.test("LimitedStack - size and clear functionality", () => {
  const stack = new LimitedStack<string>(3);
  stack.push("a");
  stack.push("b");
  stack.push("c");
  assertStrictEquals(stack.size(), 3); // Size should reflect number of items
  stack.clear();
  assertStrictEquals(stack.size(), 0); // After clear, size should be 0
  assertEquals(stack.pop(), undefined); // Stack should be empty
});

Deno.test("LimitedStack - respecting limit", () => {
  const stack = new LimitedStack<number>(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4); // This should remove the oldest item (1)
  assertEquals(stack.getAll(), [2, 3, 4]); // Verify that the oldest item was removed
});

Deno.test("LimitedStack - getAll functionality", () => {
  const stack = new LimitedStack<number>(5);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  assertEquals(stack.getAll(), [1, 2, 3]); // Verify getAll returns all items
});
