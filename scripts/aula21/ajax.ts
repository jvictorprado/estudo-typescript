class AjaxTest{
    private READY_STATUS_CODE = 4; //quando a requisição ajax está completa o status é 4
    // 0 Uninitialized, 1 set up but not sent, 2 sent, 3 in flight, 4 completed

    private isCompleted(req:XMLHttpRequest){
        return req.readyState === this.READY_STATUS_CODE;
    }

    public httpGet(url:string, callback: (status:number, response:string)=>any):void{
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if(finished){
                callback(req.status,req.responseText);
            }
        }
        req.open("GET",url, true); // fazendo requisição GET.. true = assincrona
        req.send(); // enviando
    }

    // public httpPost(url:string, data:string, callback: (status:number, response:string)=>any):void{
    //     let req = new XMLHttpRequest();

    //     req.onreadystatechange = () => {
    //         let finished = this.isCompleted(req);
    //         if(finished){
    //             callback(req.status,req.responseText);
    //         }
    //     }
    //     req.open("POST",url, true); // fazendo requisição POST.. true = assincrona
    //     req.setRequestHeader("Content-type","application/json");
    //     req.send(data); // enviando
    // }
}

let ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip",(status:number,response:string) => {
    let divMain = <HTMLDivElement> document.getElementById("main");
    divMain.innerHTML = status+" "+ response;
}); 

// ajax.httpPost("http://httpbin.org/post","{name: 'Victor Prado',company: 'DAITAN'}",(status:number,response:string) => {
//     let divMain = <HTMLDivElement> document.getElementById("main");
//     divMain.innerHTML = response;
// });