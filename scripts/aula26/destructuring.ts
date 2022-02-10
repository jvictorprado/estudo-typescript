let person = {name:"Julio", lastName: "Cesar"}; 
//jeito normal
let name1 = person.name;
let lastName1 = person.lastName;
console.log(name1);
console.log(lastName1);
//destructuring
let {name: name2, lastName: lastName2} = person;
console.log(name2);
console.log(lastName2);
console.log("---------------------------------------------------------");

let array = ["MEMENTO", "MORI"];
//jeito normal
let n1 = array[0];
let n2 = array[1];
console.log(n1);
console.log(n2);
//destructuring
let [a,b] = array;
console.log(a);
console.log(b);
console.log("---------------------------------------------------------");

class Person{
    constructor(public name:string){
    }
}
//jeito normal
function example(p:Person):void{
    console.log(p.name);
}
//destructuring
function example2({name}):void {
    console.log(name);
}
example(new Person("THOR"));
example2(new Person("LOKI"));
console.log("---------------------------------------------------------");

//array aninhado
const colors = ['branco',['vermelho','laranja','amarelo'],'preto'];
//jeito normal
const verm = colors[1][0];
const lar = colors[1][1];
const ama = colors[1][2];
console.log(verm,lar,ama);
//destructuring
const [,[red,orange,yellow]] = colors;
console.log(red,orange,yellow); // console.log(typeof red);
console.log("---------------------------------------------------------");

//objeto aninhado
const obj = {
    prop1:{
        innerProp1:1,
        innerProp2:2
    }
}
//jeito normal
const ip1 = obj.prop1.innerProp1;
const ip2 = obj.prop1.innerProp2;
console.log(ip1,ip2);
//destructuring- tem essas duas formas \/
const {innerProp1} = obj.prop1;
const { prop1: { innerProp2 } } = obj;
console.log(innerProp1,innerProp2);

