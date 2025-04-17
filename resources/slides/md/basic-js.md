---
marp: true
---

# Basics in JavaScript

---

# Index
0) Basics
1) Object
1) Regular Expression
2) Array
3) Object
4) Function
5) DOM Manipulation
6) Class and OOP
8) Asynchronous Programming
7) Testing
8) External libraries
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

---

# Class and OOP in JavaScript
1) Class
2) Prototype
3) Constructors
4) Types
5) Subclasses
6) Modules

---

# Class and OOP: Class
- Class is not an object, it is a template for object
-  Constructors work as in Java
---
Abstract Example of JavaScript Class
```
class ClassName {
    constructor() {...}
    method_1() {...}
    method_2() {...}
    method_3() {...}
}
```
---
Concrete Example of JavScript Class

```
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }
}

const myCar = new Car("Ford", 2014);
```
---

Classes are always executed in "strict mode", never in script mode.

---

# Class and OOP: Inheritance
- Inheritance is based on prototype chain (prototype-based inheritance)
- Every object has its own prototype
- To find the method to be executed on a certain object, explore the prototype chain to the null element
- Class is sintactic sugar for prototype. Behind a class definition there is always a prototype
---

# Class and OOP: Prototype
- actual version of the class definition
- 

---

# Class and OOP: Subclass Usage
- Inside the constructor you can call super()
- You can use extends keyword to extend one class
- You can use this keyword to referencing the attribute and the method of the class

---

# Function
1. Function Properties, Method and Constructor
1. Recursion
2. Scope
3. Closure
4. Callbacks
5. IIFE
6. Functions are First-Class Citizens
7. High-Order Function
8. Currying
9. Memoization

---

# Function: Function Properties, Method and Constructor
- We say that in JavaScript Function are value, and so they have Constructor, Properties and Method

- Constructor: (not popular)

```
function myFunc(a, b) {
    return a + b;
}

const myFunc = new Function('a','b','return a + b');
```

---
# Function: Function Properties, Method and Constructor (2)

- Properties: 
    - .length: number of parameters
    - .name: name of the function (void if anonymous)
    - .arguments: array of the arguments of the function
- Custom properties: you can add properties to a function
```
function greet() {}
greet.customProp = "Hello!";
console.log(greet.customProp); // "Hello!"
```
---
# Function: Function Properties, Method and Constructor (3)

- Method of the function:
    - call: 
    - apply: as call, but arguments in the array
    - bind: a function to an object
    - toString: return the body of the function
---
# Function: Function Properties, Method and Constructor (Bind)
- The bind method bind a function f to an object o
- When you invoke bind on function, it will return a new function f, method of o
- Any arguments you pass to the new function are passed to the original function, but performing partial application
---
```
function sayHi(name) {
    console.log(`Hi, ${name}`);
}

sayHi.call(null,"Jack"); // "Hi, Jack"
sayHi.apply(null,["John"]); // "Hi, John"

const bound = sayHi.bind(null, "Tom");
bound() // "Hi, Tom"
```
---

# Function: Function Properties, Method and Constructor (4)
- The arrow function are lightweight function:
    - they don't have `this`, `arguments`, `super` nor `new.target`
    - they cannot be use as `constructor`
    - the don't have `prototype`
---
# Function: Function Properties, Method and Constructor (5)
- new.target is an attribute that is `true` if the function has been called with the `new` keyword, false otherwise

- this attribute can be used to ensure a function is called with the `new` keyword, as a constructor. This is the right way of realize a constructor by function

- this works also with class constructor

```
function MyObject() {
    if (!new.target) {
        throw new Error ("This function cannot be called without `new`!");
    }
    return myObject();
}
new MyObject(); // the correct way
MyObject(); // the wrong way
```
---
# Asynchronous Programming

---

# Asynchronous Programming: Topics

1.  Asynchronous Programming by Events
2. Promise - Then, Catch, Finally
3. Async - Await

---

# Testing
1. Basics
2. Jasmine (Jest, Mocha)

---

# External Libraries

---

# External Libraries: Topics
1. Ajax
2. jQuery
3. Fetch
4. Axios
5. Superagent
6. Prototype
7. Node HTTP

