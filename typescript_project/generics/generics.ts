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
console.log(myNumberSet);

const myStringSet = new MyGenericSet<String>();
myStringSet.add("temp1").add("temp2");
console.log(myStringSet);