// TIPOS DE VAR - PT 2

//v3 não é obrogatorio
function add (v1:number, v2:number, v3?:number):number{
    if(v3 !== undefined)
        return v1 + v2 + v3;
    return v1+v2;
}
console.log(add(1,2));

// MANEIRAS DE FAZER CAST 
let var1 : any = "teste";
let stringLength : number = (<string> var1).length;
let stringUpperCase : string = (var1 as string).toUpperCase();
console.log(stringLength);
console.log(stringUpperCase);

//REST PARAMETER
function add2(v1:string, ...v2:number[]):void{
    let sum : number = 0;
    for(let i =0; i<v2.length; i++){
        sum += v2[i];
    }
    console.log(v1 + sum);
}

add2("Sum is:", 1,2,4,5);