function add(i1:number, i2:number):number {
    return i1 + i2;
}

class Person {
    protected _name: string;
    protected _surname: string;

    constructor ( name:string, surname:string ){
        this._name = name;
        this._surname = surname;
    }

    get name():string {
        return this._name;
    }

    get surname():string {
        return this._surname;
    }

    set setName(name:string) {
        this._name = name;
    }

    set setSurname(surname:string) {
        this._surname = surname;
    }
}

class Student extends Person {
    public _code:string;

    constructor (name: string, surname:string, code:string) {
        super(name, surname);
        this._code = code;
    }

    get name():string {
        return super.name;
    }

    get surname():string {
        // return super.getSurname;
        return "";
    }

    get getCode () : string {
        return this._code;
    }

    set name(name:string) {
        // super.setName;
    }

    set setSurname(surname:string) {
        // super.setSurname
    }

    set setCode(code:string) {
        this._code = code;
    }
}