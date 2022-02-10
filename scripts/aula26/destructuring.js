var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var person = { name: "Julio", lastName: "Cesar" };
//jeito normal
var name1 = person.name;
var lastName1 = person.lastName;
console.log(name1);
console.log(lastName1);
//destructuring
var name2 = person.name, lastName2 = person.lastName;
console.log(name2);
console.log(lastName2);
console.log("---------------------------------------------------------");
var array = ["MEMENTO", "MORI"];
//jeito normal
var n1 = array[0];
var n2 = array[1];
console.log(n1);
console.log(n2);
//destructuring
var _a = __read(array, 2), a = _a[0], b = _a[1];
console.log(a);
console.log(b);
console.log("---------------------------------------------------------");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
//jeito normal
function example(p) {
    console.log(p.name);
}
//destructuring
function example2(_a) {
    var name = _a.name;
    console.log(name);
}
example(new Person("THOR"));
example2(new Person("LOKI"));
console.log("---------------------------------------------------------");
//array aninhado
var colors = ['branco', ['vermelho', 'laranja', 'amarelo'], 'preto'];
//jeito normal
var verm = colors[1][0];
var lar = colors[1][1];
var ama = colors[1][2];
console.log(verm, lar, ama);
//destructuring
var _b = __read(colors, 2), _c = __read(_b[1], 3), red = _c[0], orange = _c[1], yellow = _c[2];
console.log(red, orange, yellow); // console.log(typeof red);
console.log("---------------------------------------------------------");
//objeto aninhado
var obj = {
    prop1: {
        innerProp1: 1,
        innerProp2: 2
    }
};
//jeito normal
var ip1 = obj.prop1.innerProp1;
var ip2 = obj.prop1.innerProp2;
console.log(ip1, ip2);
//destructuring- tem essas duas formas \/
var innerProp1 = obj.prop1.innerProp1;
var innerProp2 = obj.prop1.innerProp2;
console.log(innerProp1, innerProp2);
