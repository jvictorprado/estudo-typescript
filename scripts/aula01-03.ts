let p = document.createElement("p");
let ola: string = "HELLO WORD";
p.textContent = ola;

document.body.appendChild(p);

// TIPOS DE VARIAVEIS - PT1
let num : number = 10;
let bool : boolean = true;
let str : string = "message";
let str2 : string = 'other message';
let str3 : string = `${str2} to somebody`;

console.log(str3);

// FUNCTION
function func() : void {}

if(bool !==null){}
if(bool === undefined){}
if(bool){
    // o let não fica num escopo global
    let i : number;
    for(i=0; i<3; i++){
        console.log(i);
    }
}

//ARRAY
let list : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

//TUPLA ( como se fosse um array de tamanho predefinido, aonde podemos dizer os tipos de objetos dentro dele)
let tuple:[string,number];
tuple = ["Victor",25];
console.log(tuple[0].toUpperCase());

//ENUM
enum Day{MONDAY, TUESDAY}
let day : Day = Day.MONDAY;
console.log(`day : ${day}`);