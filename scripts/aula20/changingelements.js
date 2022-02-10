var divMain = document.getElementById("main");
// divMain.innerHTML = "<span> MEMENTO </span>";
// divMain.textContent = "<span> MEMENTO </span>";
var newDiv = document.createElement("div");
newDiv.textContent = "MEMENTO MORI";
//divMain.appendChild(newDiv); // adiciona depois
divMain.insertBefore(newDiv, divMain.firstChild); //adc antes de algum elemento que vc queira
