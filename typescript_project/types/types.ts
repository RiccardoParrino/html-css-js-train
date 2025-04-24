// defining constructors
function C() {}
function D() {}

const o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
Object
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object; // true

// Re-assign `constructor.prototype`: you should
// rarely do this in practice.
C.prototype = {};
const o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C;

D.prototype = new C(); // add C to [[Prototype]] linkage of D
D.name = "temp";
// console.log(D.name);
// console.log(D.prototype)
const o3 = new D();
// console.log(o3 instanceof D); // true
// console.log(o3 instanceof C); // true since C.prototype is now in o3's prototype chain

// typeof example
// const i1:number = 10;
// console.log( typeof i1 );
// console.log( typeof typeof i1 );



enum Language {
    English = 0, Spanish = 1, Russian = 2
}

enum Color {
    Red = 9,
    Blue = 8,
    Pink = 10,
    Purple = 11
}
console.log(Color.Red);
console.log(Color["Red"]);
console.log(Color["11"]);