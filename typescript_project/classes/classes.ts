class MyPerson {
    _name: string
    _age: number
    private _phone_number: string
    private _pass: string

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
console.log(myPerson.get_phone_number("1234"));
console.log(myPerson.get_phone_number("2345"));