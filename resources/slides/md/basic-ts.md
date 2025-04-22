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
# Basics: Type safety
- Type safety: Using types to prevent programs from doing invalid things
- Statically Typed: I made a mistake when I compile the program
- Dynamically Typed: I made a mistake when I RUN the program
- TypeScript is Statically Typed differently from JavaScript that is Dynamically Typed
---
# Basics: Compiler and Compiling Process
- TypeScript Compiler (TSC)
- How compilation works: text (code) -> compiler -> abstract syntax tree (AST) -> bytecode -> feed it into runtime and get results
- but before: TS code -> TS AST -> Typechecker -> JS Source
- Typechecker: A special program that verifies that your code is typesafe 
- Important fact: when TSC compiles your code from TypeScript to JavaScript, it won't look at your types
---
# Basics: TypeChecker
- 
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

