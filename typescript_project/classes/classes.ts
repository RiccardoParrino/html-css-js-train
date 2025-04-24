// first class example
class MyPerson {
    _name: string // public prop
    _age: number // public prop
    private _phone_number: string // private prop
    private _pass: string // private prop

    constructor (name:string, age:number, phone_number:string, _pass:string) {
        this._name = name;
        this._age = age;
        this._phone_number = phone_number;
        this._pass = _pass;
    }

    get name(): string {
        return this._name;
    }

    set name(name:string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age:number) {
        this._age = age;
    }

    get_phone_number (pass:string) : string {
        if (pass === this._pass)
            return this._phone_number
        return "Failed password!";
    }
}
const myPerson = new MyPerson("ric", 27, "333333", "1234");
// console.log(myPerson.get_phone_number("1234"));
// console.log(myPerson.get_phone_number("2345"));


// Inheritance class example
class MyStudent extends MyPerson {
    _code_student:string;

    constructor (name:string, age:number, phone_number:string, _pass:string, _code_student:string) {
        super(name,age,phone_number,"1234");
        this._code_student = _code_student;
    }

    get code_student ():string {
        return this._code_student;
    }

    set code_student(code_student:string) {
        this._code_student = code_student;
    }
}
const myStudent = new MyStudent("ric",27,"333333","1234","0704021");
// console.log(myStudent);

// using get accessor example
// console.log(myStudent.age);

// using set accessor example
myStudent.code_student = "10000";
// using set accessor example of a super class attribute
myStudent.age = 35;
// console.log(myStudent.code_student);

// instanceof return true for the super class and for subclass
// console.log(myStudent instanceof MyPerson); // true
// console.log(myStudent instanceof MyStudent); // true

// constructor overloading example
class User {
    name: string;
    age?: number;

    constructor(name: string);
    constructor(name: string, age: number);
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
}
const myUser = new User("ric",27);
// console.log(myUser);



// Using this as Return Type example
class MySet {
    _elements:number[];

    constructor() {
        this._elements = new Array();
    }

    public add (num:number):this {
        this._elements.push(num);
        return this;
    }

    public del (num:number):void {
        let new_array:number[] = new Array();
        for (let i = 0; i < this._elements.length; i++){
            if (this._elements[i] === num)
                continue;
            else
                new_array.push(this._elements[i]);
        }
        this._elements = new_array;
        return;
    }

    public mem(num:number):boolean {
        for (let i = 0; i <  this._elements.length; i++){
            if (this._elements[i] === num)
                return true;
        }
        return false;
    }
}

const mySet = new MySet();
mySet.add(1).add(2).add(3);
// console.log(mySet);



// overwriting method
class A {
    constructor () {}

    public method ():string {
        return "A";
    }
}
class B extends A {
    constructor() {
        super();
    }

    // public method():string {
    //     return super.method();
    // }

    public method():string {
        return "B";
    }
}
const a = new A();
console.log(a.method());
const b = new B();
console.log(b.method());


// static method in class example
