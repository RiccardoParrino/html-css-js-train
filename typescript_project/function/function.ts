// function declaration example
function add (i1:number, i2:number):number {
    return i1 + i2;
}
// function invoking example
// console.log(add(1,2));



// Optional parameters function example 
function add2(i1:number, i2?:number): number {
    if (i2)
        return i1 + i2;
    else
        return i1;
}
// console.log(add2(1,2));



// Default parameters function example
function add3(i1:number, i2 = 3): number {
    return i1 + i2;
}
// console.log(add3(1));



// Variable Number of Parameters (1)
function add4( array_sum:number[] ) : number {
    return array_sum.reduce( (x1,x2) => (x1 + x2) );
}
// console.log(add4([1,2,3,4,5]));

// Variable Number of Parameters (2)
function add5( ...values:number[] ) : number {
    return values.reduce( (x1,x2) => (x1 + x2) );
}
console.log(add5(1,2,3,4,5));



// Call, apply, bind on function
class Pair {
    firstNumber: number;
    secondNumber: number;

    constructor (firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
}

function addToFirstNumber(i1:number, i2:number) : number {
    return this.firstNumber + i1 + i2;
}
let p = new Pair(10,20);
// console.log(addToFirstNumber.apply(p,[10,20]));
// console.log(addToFirstNumber.call(p,10,20));
// console.log(addToFirstNumber.bind(p,10,20)());



// Type Narrowing example
function add7(i1:number, i2:string|number):number {
    if (typeof i2 === "string") 
        return i1 + parseInt(i2);
    else
        return i1 + i2;
}
console.log(add7(10,20));



// In operator narrowing
abstract class LiveBeing {
}

class Person extends LiveBeing{
    name:string;
    surname:string;
    constructor (name:string, surname:string) {
        super();
        this.name = name;
        this.surname = surname;
    }
}

class Animal extends LiveBeing {
    name:string;
    feet:number;
    constructor (name:string, feet:number) {
        super();
        this.name = name;
        this.feet = feet;
    }
}

function printPersonOrAnimal (element:any) {
    if ( "feet" in element ) {
        console.log(element.name + " " + element.feet);
    } else {
        console.log(element.name + " " + element.surname);
    }
}

const person = new Person("ric", "par");
const animal = new Animal("doggo", 4);
printPersonOrAnimal(person);
printPersonOrAnimal(animal);