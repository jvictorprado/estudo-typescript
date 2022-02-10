// FUNÇÕES
var _this = this;
//Optional argument
function print11(val) {
    console.log(val);
}
print11();
print11("message");
//Default argument
function printOrNot(flag) {
    if (flag === void 0) { flag = false; }
    var str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot();
printOrNot(true);
//Anonymous Functions
var sumAnonymoys = function (n1, n2) {
    console.log("sum : ".concat(n1 + n2));
};
sumAnonymoys(1, 2);
//Arrow Functions - Lambda
var sumArrow1 = function (n1, n2) { return n1 + n2; };
var sumArrow2 = function (n1, n2) { return n1 + n2; };
var objectArrow = function (name, surname) { return ({ name: name, surname: surname }); }; // returng a object
console.log(sumArrow1(3, 3));
console.log(sumArrow2(4, 4));
console.log(objectArrow("Victor", "Prado"));
// THIS
console.log("--------------------");
function testThis() {
    return this;
} // retorna o objeto Window
console.log(testThis());
console.log(this);
var objExample = {
    name: "Jiraya",
    lastName: "Ninja",
    fullName: function () {
        return this; // retorna o Object 
    },
    fullName2: function () {
        return _this; // qnd usa arrow function retorna o objeto do escopo superior, no caso Window 
    },
    thisExcample: this
};
console.log(objExample.name);
console.log(objExample.fullName());
console.log(objExample.fullName2());
console.log(objExample.thisExcample);
var lottery = {
    names: ["Gon", "Killua", "Leorio"],
    test: "lalala",
    createLotteryPicker: function () {
        var _this = this;
        console.log("First level this: " + this.names + " " + this.test);
        // return function(){
        //     console.log("Second level this: " + this);
        //     let pickedPersonNumber = Math.floor(Math.random()*3);
        //     return {name:this.names[pickedPersonNumber]};
        // } desse jeito o this interno ta se referindo ao window.. ent vamos fazer referenciar o mais externo
        return function () {
            console.log("Second level this: " + _this);
            var pickedPersonNumber = Math.floor(Math.random() * 3);
            return { name: _this.names[pickedPersonNumber] };
        };
    }
};
var personPicker = lottery.createLotteryPicker();
var pickedPerson = personPicker();
console.log(pickedPerson);
