function doingSomething(callback) {
    callback.call(this, "João");
    callback.apply(this, ["Silva", "João"]); // só lê o 1º
    callback("Isabel");
}
function execute(name) {
    console.log("Ol\u00E1 ".concat(name));
}
doingSomething(execute);
function calculator(num1, num2, type) {
    switch (type) {
        case "add": return num1 + num2;
        case "sub": return num1 - num2;
        case "mult": return num1 * num2;
        case "div": return num1 / num2;
        default: return 0;
    }
}
console.log(calculator(2, 1, "mult"));
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function calculator2(a, b, callback) {
    return callback(a, b);
}
console.log(calculator2(34, 35, add));
console.log(calculator2(30, 10, function (a, b) {
    return a - b;
}));
