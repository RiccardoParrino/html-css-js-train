---
marp: true
---

# Regular Expression in JavaScript

---

# Array in JavaScript
1. forEach, Map, Filter
2. Destructuring Array
3. Rest Operator

---

# Array: Destructuring Array

```
const numbers = [10,20,30];

// Destructuring
const [a,b,c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

---

# Array: Destructuring Array (2)
```
const numbers = [10,20,30];

// Destructuring
const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
```

---

# Array: Destructuring Array (3)

```
const number = [5];
const [x,y = 99] = number;

console.log(x); // 5
console.log(y); // 99
```
---

# Array: Rest Operator

```
const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // 10
console.log(rest); // [20,30,40]
```

---
# Object in JavaScript
1. Basic feature of an object
2. Creating an Object
3. Destructuring an Object
4. Arrays in JavaScript

---

# Basic feature of an Object

---

# Creating an Object

---

# Destructuring an Object

---

# Arrays in JavaScript

---

# Class and OOP in JavaScript
1) Class
2) Prototype
3) Constructors
4) Types
5) Subclasses
6) Modules
---

# 1. Class

---

# 2. Prototype

---

# 3. Constructors

---

# 4. Types

---

# 5. Subclasses

---

# 6. Modules

---

# Function
1. Recursion
2. Scope
3. Closure
4. Callbacks
5. IIFE
6. Function are First-Class Citizens
7. High-Order Function
8. Currying
9. Memoization

---

# Testing
1. Basics
2. Jasmine