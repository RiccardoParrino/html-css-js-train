var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function add(i1, i2) {
    return i1 + i2;
}
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setSurname", {
        set: function (surname) {
            this._surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, code) {
        var _this = _super.call(this, name, surname) || this;
        _this._code = code;
        return _this;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return _super.prototype.name;
        },
        set: function (name) {
            // super.setName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "surname", {
        get: function () {
            // return super.getSurname;
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getCode", {
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setSurname", {
        set: function (surname) {
            // super.setSurname
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setCode", {
        set: function (code) {
            this._code = code;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person));
