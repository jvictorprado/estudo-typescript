// FUNÇÕES

//Optional argument
function print11(val?:string): void {
    console.log(val);
}
print11();
print11("message");

//Default argument
function printOrNot(flag: boolean = false): void{
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot();
printOrNot(true);


//Anonymous Functions

let sumAnonymoys = function (n1:number, n2:number):void {
    console.log(`sum : ${n1 + n2}`);
};
sumAnonymoys(1,2);

//Arrow Functions - Lambda
let sumArrow1 = (n1: number, n2: number) => n1 + n2;
let sumArrow2 = (n1: number, n2: number) => {return n1 + n2};
let objectArrow = (name:string, surname:string) => ({name:name, surname:surname}); // returng a object
console.log(sumArrow1(3,3));
console.log(sumArrow2(4,4));
console.log(objectArrow("Victor","Prado")); 


// THIS
console.log("--------------------");

function testThis(){
    return this;
}// retorna o objeto Window
console.log(testThis());
console.log(this);
let objExample = {
    name: "Jiraya",
    lastName: "Ninja",
    fullName: function() {
        return this; // retorna o Object 
    },
    fullName2: () => {
        return this; // qnd usa arrow function retorna o objeto do escopo superior, no caso Window 
    },
    thisExcample: this
};
console.log(objExample.name);
console.log(objExample.fullName());
console.log(objExample.fullName2());
console.log(objExample.thisExcample);

let lottery = {
    names: ["Gon", "Killua", "Leorio"],
    test: "lalala",
    createLotteryPicker: function(){
        console.log("First level this: " + this.names + " " + this.test);
        // return function(){
        //     console.log("Second level this: " + this);
        //     let pickedPersonNumber = Math.floor(Math.random()*3);
        //     return {name:this.names[pickedPersonNumber]};
        // } desse jeito o this interno ta se referindo ao window.. ent vamos fazer referenciar o mais externo
        return () =>{
            console.log("Second level this: " + this);
            let pickedPersonNumber = Math.floor(Math.random()*3);
            return {name:this.names[pickedPersonNumber]};
        }
    }
};

let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);