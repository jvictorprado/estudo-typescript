//GENERICS
function reverseList(list) {
    var reversedList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
var names = ["Ana", "Bianca", "Carlos"];
var numbers = [1, 2, 3, 4];
var reversedNames = reverseList(names);
var reversedNumbers = reverseList(numbers);
console.log(reversedNames);
console.log(reversedNumbers);
var reverseListArrow = function (list) {
    var reversedList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};
console.log(reverseListArrow(names));
//EM CLASSES E INTERFACES
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this._name = name;
    }
    Person3.prototype.print = function () {
        console.log("name: ".concat(this._name));
    };
    Object.defineProperty(Person3.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    return Person3;
}());
var Person3Repository = /** @class */ (function () {
    function Person3Repository() {
    }
    Person3Repository.prototype.findById = function (id) {
        console.log("Searching using ID: ".concat(id));
        return new Person3("Nami");
    };
    Person3Repository.prototype.save = function (entity) {
        return new Person3("Franky");
    };
    return Person3Repository;
}());
var personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Chooper")));
