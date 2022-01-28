// DIFERENÇAS (var, let, const, readonly)
// 1. var =    não é presa a nenhum escopo 
//             toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução (podendo ser usada antes da declaração)
//             é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor)
// 2. let =    variáveis com escopo de bloco
//             o default tbm é undefined
// 3. const =  também tem escopo de bloco
//             uma vez atribuído um valor a ela, este não pode ser alterado
//             devem ser inicializadas obrigatoriamente no momento de sua declaração
// 4. readonly =  diferença entre readonly e const : 
//                se tiver trabalhando com variaveis usa const; 
//                se tiver trabalhando com atributos, interfaces ou classes usa o readonly
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
// CLASSES
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this._name = name;
    }
    Person2.prototype.print = function () {
        console.log("name: ".concat(this._name));
    };
    Object.defineProperty(Person2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, salary) {
        var _this = _super.call(this, name) || this;
        _this._salary = salary;
        return _this;
    }
    Employee2.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("salary: ".concat(this._salary));
    };
    Object.defineProperty(Employee2.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (v) {
            this._salary = v;
        },
        enumerable: false,
        configurable: true
    });
    return Employee2;
}(Person2));
var p1 = new Person2("João");
var emp1 = new Employee2("João Victor", 2500);
p1.print();
emp1.print();
// POLIMORFISMO
var p2 = {}; // uma outra maneira de declarar
var p3 = new Employee2("Lucy", 2000);
p3.print(); // lembrando que a gente chama pela variável de referencia mas quem executa é o objeto(no caso, Employee2)   
