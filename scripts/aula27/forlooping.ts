// TIPO 1
let arr = ["THOR","LOKI"];
for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log("------");
//TIPO 2
arr.forEach((elem)=>{
    console.log(elem); //NÃO PEGA RETURN, BREAK, CONTINUE
});
console.log("------");
let person2 = {name: "THOR", lastname: "ODINSON"};
//TIPO 3
for(let i in person2){
    console.log(i);
}
for(let i in arr){
    console.log(i);
}
console.log("------");
//TIPO 4
for(let i of arr){
    console.log(i);
}