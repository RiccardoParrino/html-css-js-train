// generic class example
class MyGenericSet<T> {
    array: T[];

    constructor () {
        this.array = new Array();
    }

    add(element:T): this {
        this.array.push(element);
        return this;
    }
}

const myNumberSet = new MyGenericSet<Number>();
myNumberSet.add(3);
// console.log(myNumberSet);

const myStringSet = new MyGenericSet<String>();
myStringSet.add("temp1").add("temp2");
// console.log(myStringSet);


// parametric interface
interface Pair<K,V> {
    key: K;
    value: V;
    myFunction(k:K) : V;
}

class Logarithm implements Pair<Number,Number>{
    key: Number;
    value: Number;
    myFunction(k: Number): Number {
        return Math.log(parseInt(k.toString()));
    }
}

// parametric function example
function id<T>(arg: T):T {
    return arg;
}
let result = id<string>("ciao");
console.log(result);
let result2 = id("ciao");
console.log(result2);




// Function with Constrained Generics example
function parametricDoubled<K extends number>(arg:K): K {
    return arg;
}

const x:number = 20;
console.log(parametricDoubled(x));

