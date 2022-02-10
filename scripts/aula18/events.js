var ClickHandler = /** @class */ (function () {
    function ClickHandler() {
        var main = document.getElementById("main");
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain, true); // botando o false é feita uma logica bottomUp > Bubbling (faz o oposto do de baixo)
            btn1.addEventListener("click", ClickHandler.alertEventBtn1, true); // botando o true é feita uma logica topDown > capturing ( vai executar o da main que é superior e depois o dele)
            btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
        }
    }
    ClickHandler.alertEventMain = function () {
        alert("clicked over main");
        // se quiser parar a propagação depois desse alerta de cima:
        //event.stopPropagation();
    };
    ClickHandler.alertEventBtn1 = function () {
        alert("clicked over btn1");
    };
    ClickHandler.alertEventBtn2 = function () {
        alert("clicked over btn2");
    };
    return ClickHandler;
}());
var clickhander = new ClickHandler();
