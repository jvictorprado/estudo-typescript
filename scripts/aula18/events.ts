class ClickHandler{
    constructor(){
        let main = document.getElementById("main");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        if(main!==null && btn1!==null && btn2!==null){
            main.addEventListener("click",ClickHandler.alertEventMain,true); // botando o false é feita uma logica bottomUp > Bubbling (faz o oposto do de baixo)
            btn1.addEventListener("click",ClickHandler.alertEventBtn1,true); // botando o true é feita uma logica topDown > capturing ( vai executar o da main que é superior e depois o dele)
            btn2.addEventListener("click",ClickHandler.alertEventBtn2,true); 
        }
    }

    static alertEventMain(){
        alert("clicked over main");
        // se quiser parar a propagação depois desse alerta de cima:
        //event.stopPropagation();
    }
    static alertEventBtn1(){
        alert("clicked over btn1");
    }
    static alertEventBtn2(){
        alert("clicked over btn2");
    }
}

const clickhander = new ClickHandler();