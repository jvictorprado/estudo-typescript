//COMPATIBILIDADE DE DADOS

interface Example1{
    name: string;
}

class AnotherExample1{
    name: string;
    age: number;
}

class AnotherExample2{
    num:number;
}

let exVar :Example1;
exVar = new AnotherExample1;  // aceita, pois na estrutura de AnotherExample1 tem o name:String tbm
// exVar = new AnotherExample2; não tem nada que o Example1 tem.. ent não rola
let exVar2 = {name:"joao", age:55};
exVar = exVar2; // msm logica que o de cima

//também é valido em parametros de funções
function testExample(ex:Example1){
    console.log(ex.name);
}
testExample(exVar2);

// com funções:
let x1 = (a:number) => a;
let x2 = (b:number, s:string) => b+s;
let x3 = (c:number, s:string) => c;
console.log(x1(10));
console.log(x2(10,"something"));
//x2 = x1; não funciona, pois s é usado no escopo de x2 e ele n tem em x1
x3 = x1; // funciona, pois s não é usado.. então o escopo que x3 usa agora é o de x1
console.log(x3(120, "x3"));

let items = [1,2,3];
items.forEach((item,index,array)=> console.log(item,index,array));
items.forEach(item => console.log(item));