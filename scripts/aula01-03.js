var p = document.createElement("p");
var ola = "HELLO WORD";
p.textContent = ola;
document.body.appendChild(p);
// TIPOS DE VARIAVEIS - PT1
var num = 10;
var bool = true;
var str = "message";
var str2 = 'other message';
var str3 = "".concat(str2, " to somebody");
console.log(str3);
// FUNCTION
function func() { }
if (bool !== null) { }
if (bool === undefined) { }
if (bool) {
    // o let não fica num escopo global
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
//ARRAY
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//TUPLA ( como se fosse um array de tamanho predefinido, aonde podemos dizer os tipos de objetos dentro dele)
var tuple;
tuple = ["Victor", 25];
console.log(tuple[0].toUpperCase());
//ENUM
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
})(Day || (Day = {}));
var day = Day.MONDAY;
console.log("day : ".concat(day));
