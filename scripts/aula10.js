//CALLBACKS
function exibir(n) {
    console.log(n);
}
function sum(a, b) {
    var s = a + b;
    exibir(s);
}
sum(1, 25);
//ASSINCRONAS
console.log("Antes do setTimeOut");
setTimeout(function () {
    console.log("Testando setTimeOut");
}, 3000);
console.log("Depois do setTimeOut");
//RELEMBRANDO THIS EM ARROW FUNCTIONS
var Person123 = /** @class */ (function () {
    function Person123(name) {
        this.name = name;
    }
    Person123.prototype.printNameFunction = function () {
        setTimeout(function () {
            console.log(this.name);
        }, 200);
    };
    Person123.prototype.printNameArrowFunction = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name);
        }, 200);
    };
    return Person123;
}());
var creature = new Person123("Prado");
// a função normal define this com base onde a função é chamada (e aqui ta no escopo global)
creature.printNameFunction();
// retorna o objeto do escopo superior
creature.printNameArrowFunction();
