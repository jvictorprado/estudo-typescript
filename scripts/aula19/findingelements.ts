let element = document.getElementById("btn2"); // HTMLElement
console.log(element);

let element2 = document.querySelector("#btn1");
console.log(element2);

let element3 = <HTMLDivElement> document.querySelector(".main"); //HTMLDivElement
console.log(element3);

let element4 = document.getElementsByTagName("div");//NodeListOf<HTMLDivElement>
console.log(element4);
console.log(element4[3]);

let element5 = document.querySelectorAll(".btn"); //HTMLDivElement
console.log(element5);