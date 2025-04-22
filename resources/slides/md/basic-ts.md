---
marp: true
---

# Basics in TypeScript

---
# Topics
- Basics
- Objects
- Enums
- Arrays
- Functions
- Classes and Interfaces
- Generics
- Basic Types
- Type Operators
- Working with Types
- Debugging

---
# Basics
- Install with `npm i -g typescript`
- Run with `tsc file-name`
- tsconfig.json: -outDir, 
---
# Basics: JS vs TS
- larger than js
- static typing
- code completion
---
# Basic Types
- string, boolean, number
- any
- undefined
- null
```
let n: number = 10;
```
---
# Type Operators
- Union Type Operator
```

```
- And Type Operator
---
# Functions
- Return type
- Optional parameters
- Narrowing
- Optional call
- Optional operator

```
function function_name (a, b = 2025) : number {
    return a * b;
} 
```
---
# Enums
```
const enum Size {
    Small = 1,
    Medium,
    Large
}

const enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
```
---

