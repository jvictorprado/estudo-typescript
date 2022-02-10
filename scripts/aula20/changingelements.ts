let divMain = <HTMLDivElement> document.getElementById("main");
// divMain.innerHTML = "<span> MEMENTO </span>";
// divMain.textContent = "<span> MEMENTO </span>";
let newDiv = document.createElement("div");
newDiv.textContent = "MEMENTO MORI";

//divMain.appendChild(newDiv); // adiciona depois
divMain.insertBefore(newDiv,divMain.firstChild); //adc antes de algum elemento que vc queira