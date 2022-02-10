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
function openFile() {
    return new Promise(function (resolve, reject) {
        var isOpened = true;
        if (isOpened)
            resolve("The file is open");
        reject("It isn't open");
    });
}
function readFile() {
    return new Promise(function (resolve, reject) {
        var wasRead = true;
        if (wasRead)
            resolve("The file was read");
        reject("It wasn't read");
    });
}
function deleteFile() {
    return new Promise(function (resolve, reject) {
        var deleted = true;
        if (deleted)
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
    .then(function () { return readFile()
    .then(function () { return deleteFile()
    .then(function () { return console.log("Everything is OK!"); })["catch"](function (fromReject) { return console.log(fromReject); }); })["catch"](function (fromReject) { return console.log(fromReject); }); })["catch"](function (fromReject) { return console.log(fromReject); });
// SE QUISER FAZER TDS PARALELAS (n dependem umas da outras):
Promise.all([openFile(), readFile(), deleteFile()]).then()["catch"]();
// SE TIVER VARIAS FUNÇÕES E SÓ QUER O RESULTADO DE UMA DELAS (tipo, o primeiro q retornar):
Promise.race([openFile(), readFile(), deleteFile()]).then()["catch"]();
