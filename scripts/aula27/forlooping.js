// TIPO 1
var arr = ["THOR", "LOKI"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("------");
//TIPO 2
arr.forEach(function (elem) {
    console.log(elem); //NÃO PEGA RETURN, BREAK, CONTINUE
});
console.log("------");
var person2 = { name: "THOR", lastname: "ODINSON" };
//TIPO 3
for (var i in person2) {
    console.log(i);
}
for (var i in arr) {
    console.log(i);
}
console.log("------");
//TIPO 4
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
