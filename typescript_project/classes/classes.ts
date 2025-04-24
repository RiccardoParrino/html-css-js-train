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

    get age(): number {
        return this._age;
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
}
const myStudent = new MyStudent("ric",27,"333333","1234","0704021");
// console.log(myStudent);



// call to super method
console.log(myStudent instanceof MyPerson) // true
console.log(myStudent instanceof MyStudent); // true



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