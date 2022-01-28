//INTERFACES
function printName(person : {name:string}): void {
    console.log(person.name);
}

let randomObj = {name: "Victor", age: 25};
let randomObj2 = {age:25};

printName(randomObj);


interface Person {
    name: string;
    //caso inclua atributo que n ta sendo implementado nas filhas os objetos, da erro.. uma opção é fazer :
    // age?: number;
}
interface Employee extends Person{
    salary: number;
}

let pe: Person = {name: "João"}
let emp: Employee = {name: "João Victor", salary: 2600}
printName(pe);
printName(emp);

function printName2(person: Person): void{
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({name: "Teste"} as Person);

//também da incluir mais atributos assim:
interface Person{
    age?: number; // msm assim tem que usar o ? nesse caso
}

// definir que determinado atributo só pode ser modificado no momento da criação do objeto( como se fosse uma constante)
interface Manager extends Employee {
    readonly bonus: number;
}

let manager : Manager = {name: "Prado", salary: 3600, bonus: 10};
manager.salary = 3700;
// manager.bonus = 15; NÃO PERMITE > READONLY

printName2(manager);