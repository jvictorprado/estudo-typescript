//COMPATIBILIDADE DE DADOS
var AnotherExample1 = /** @class */ (function () {
    function AnotherExample1() {
    }
    return AnotherExample1;
}());
var AnotherExample2 = /** @class */ (function () {
    function AnotherExample2() {
    }
    return AnotherExample2;
}());
var exVar;
exVar = new AnotherExample1; // aceita, pois na estrutura de AnotherExample1 tem o name:String tbm
// exVar = new AnotherExample2; não tem nada que o Example1 tem.. ent não rola
var exVar2 = { name: "joao", age: 55 };
exVar = exVar2; // msm logica que o de cima
//também é valido em parametros de funções
function testExample(ex) {
    console.log(ex.name);
}
testExample(exVar2);
// com funções:
var x1 = function (a) { return a; };
var x2 = function (b, s) { return b + s; };
var x3 = function (c, s) { return c; };
console.log(x1(10));
console.log(x2(10, "something"));
//x2 = x1; não funciona, pois s é usado no escopo de x2 e ele n tem em x1
x3 = x1; // funciona, pois s não é usado.. então o escopo que x3 usa agora é o de x1
console.log(x3(120, "x3"));
var items = [1, 2, 3];
items.forEach(function (item, index, array) { return console.log(item, index, array); });
items.forEach(function (item) { return console.log(item); });
