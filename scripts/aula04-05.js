// TIPOS DE VAR - PT 2
//v3 não é obrogatorio
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(add(1, 2));
// MANEIRAS DE FAZER CAST 
var var1 = "teste";
var stringLength = var1.length;
var stringUpperCase = var1.toUpperCase();
console.log(stringLength);
console.log(stringUpperCase);
//REST PARAMETER
function add2(v1) {
    var v2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        v2[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add2("Sum is:", 1, 2, 4, 5);
