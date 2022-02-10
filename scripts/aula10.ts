//CALLBACKS
function exibir (n:number){
    console.log(n);
}

function sum(a:number, b:number){
    let s = a+b;
    exibir(s);
}
sum(1,25);

//ASSINCRONAS
console.log("Antes do setTimeOut");
setTimeout(function(){
    console.log("Testando setTimeOut");
}, 3000);
console.log("Depois do setTimeOut");

//RELEMBRANDO THIS EM ARROW FUNCTIONS

class Person123{
    name:String;
    constructor(name){
        this.name = name;
    }
    printNameFunction(){
        setTimeout(function(){
            console.log(this.name);
        },200);
    }
    printNameArrowFunction(){
        setTimeout(()=>{
            console.log(this.name);
        },200);
    }
}

const creature = new Person123("Prado");
// a função normal define this com base onde a função é chamada (e aqui ta no escopo global)
creature.printNameFunction();
// retorna o objeto do escopo superior
creature.printNameArrowFunction();

