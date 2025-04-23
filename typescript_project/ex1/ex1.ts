function add(i1:number, i2:number):number {
    return i1 + i2;
}

class Person {
    name: string;
    surname: string;

    constructor ( name:string, surname:string ){
        this.name = name;
        this.surname = surname;
    }
}

class Student extends Person {
    public code:string;

    constructor (name: string, surname:string, code:string) {
        super(name, surname);
        this.code = code;
    }
}