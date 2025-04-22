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
- Type System: A set of rules that a typechecker uses to assign types to your program
- General Rule: Type Explicitly Declared and Type Automatically Inferred
- Typescript does both: It can infer from example and you can declare it
- Good Programming style: Write where necessary, infer if it's possible
---
# Basics: tsconfig.json
- Every TypeScript project should include a file called tsconfig.json in its root directory
- It's a configuration file where you can set different properties of the compiling process
- You can set: which file should be compiled, which directory compile them to, which version of JavaScript to emit
- you can configure the tsconfig file also by command line
---
# Basics: tslint.json
- tslint.json for configuration and management of the code formatting style
---
# Types
- string, boolean, number
- any
- undefined
- null
```
let n: number = 10;
```
---
#  Types: Basic Types
- A set of values and the things you can do with them
- Example: boolean, string, number
---
# Types: TypeScript's type hierarchy

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

