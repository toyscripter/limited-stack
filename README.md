## Limited Stack

A Stack data structure with `limit` property.

### Usage Example

```ts
import { LimitedStack } from '@toy/limited-stack'

const stack = new LimitedStack<number>(5);

stack.push(1)
stack.pop()
stack.push(2)
console.log(stack.peek()) // 2
console.log(stack.size()) // 1
stack.push(3)
stack.getAll() // [2, 3]
stack.clear()
```