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

    get getName() {
        return this.name;
    }

    get getSurname() {
        return this.surname;
    }

    set setName(name:string) {
        this.name = name;
    }

    set setSurname(surname:string) {
        this.surname = surname;
    }
}

class Student extends Person {
    public code:string;

    constructor (name: string, surname:string, code:string) {
        super(name, surname);
        this.code = code;
    }

    get getName() {
        return super.getName;
    }

    get getSurname() {
        return super.getSurname;
    }

    get getCode () : string {
        return this.code;
    }

    set setName(name:string) {
        super.setName;
    }

    set setSurname(surname:string) {
        super.setSurname
    }

    set setCode(code:string) {
        this.code = code;
    }
}