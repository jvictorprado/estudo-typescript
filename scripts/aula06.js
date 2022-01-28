//INTERFACES
function printName(person) {
    console.log(person.name);
}
var randomObj = { name: "Victor", age: 25 };
var randomObj2 = { age: 25 };
printName(randomObj);
var pe = { name: "João" };
var emp = { name: "João Victor", salary: 2600 };
printName(pe);
printName(emp);
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({ name: "Teste" });
var manager = { name: "Prado", salary: 3600, bonus: 10 };
manager.salary = 3700;
// manager.bonus = 15; NÃO PERMITE > READONLY
printName2(manager);
