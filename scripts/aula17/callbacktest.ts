function doingSomething(callback: (name:string) => void):void{
    callback.call(this,"João");
    callback.apply(this,["Silva","João"]); // só lê o 1º
    callback("Isabel"); 
}

function execute(name:string){
    console.log(`Olá ${name}`);
}

doingSomething(execute);




function calculator(num1:number, num2:number, type:string):number{
    switch(type){
        case "add": return num1+num2;
        case "sub": return num1-num2;
        case "mult": return num1*num2;
        case "div": return num1/num2;
        default: return 0;
    }
}

console.log(calculator(2,1,"mult"));

function add(a:number,b:number):number{
    return a+b;
}
function sub(a:number,b:number):number{
    return a-b;
}
function mult(a:number,b:number):number{
    return a*b;
}
function div(a:number,b:number):number{
    return a/b;
}

function calculator2(a:number, b:number, callback: (a:number,b:number)=>number):number{
    return callback(a,b);
}

console.log(calculator2(34,35,add));
console.log(calculator2(30,10,(a:number,b:number) =>{
    return a-b;
}))