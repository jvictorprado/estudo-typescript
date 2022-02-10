// BASICÃO

// let promise = new Promise((resolve,reject)=>{
//     //OPENING THE FILE
//     let isOpened: boolean = true;
//     if(isOpened)
//         resolve("OPENED");
//     reject("NOT OPENED");
// });

// promise.then((fromResolve)=>{
//     console.log(fromResolve);
// }).catch((fromReject)=>{
//     console.log(fromReject);
// });


// COM FUNÇÕES QUE DEPENDEM DE OUTRAS
function openFile():Promise<string>{
    return new Promise((resolve, reject) => {
        let isOpened : boolean = true;
        if(isOpened)    
            resolve("The file is open");
        reject("It isn't open");
    });
}

function readFile():Promise<string>{
    return new Promise((resolve,reject) => {
        let wasRead : boolean = true;
        if(wasRead)
            resolve("The file was read");
        reject("It wasn't read");    
    });
}

function deleteFile():Promise<string>{
    return new Promise((resolve,reject) =>{
        let deleted : boolean = true;
        if(deleted)
            resolve("The file was deleted");
        reject("It wasn't deleted");
    });
}

// NÃO É O JEITO CERTO
// openFile()
// .then( (fromResolve) => console.log(fromResolve))
// .then( () => console.log(readFile()))
// .then( () => console.log(deleteFile()))
// .then( () => console.log("EVERYTHING OK!"));

openFile()
    .then(()=>readFile()
        .then(()=>deleteFile()
            .then(()=>console.log("Everything is OK!"))
            .catch((fromReject)=>console.log(fromReject)))
        .catch((fromReject)=>console.log(fromReject)))
    .catch((fromReject)=>console.log(fromReject));



// SE QUISER FAZER TDS PARALELAS (n dependem umas da outras):
Promise.all([openFile(),readFile(),deleteFile()]).then().catch();
// SE TIVER VARIAS FUNÇÕES E SÓ QUER O RESULTADO DE UMA DELAS (tipo, o primeiro q retornar):
Promise.race([openFile(),readFile(),deleteFile()]).then().catch();