// armazenamentos embutidos nos navegadores : session storage, local storage, indexDB 
// SESSION: funciona por abas.. se vc n fechar a aba sua seção n acaba.. tamanho max : 5 megabytes
var key1 = "key1";
var key2 = "key2";
console.log(sessionStorage.getItem(key1));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key1, "Prado");
sessionStorage.setItem(key2, "Silva");
console.log(sessionStorage.getItem(key1));
console.log(sessionStorage.getItem(key2));
for (var i = 0; i < sessionStorage.length; i++) {
    // console.log(sessionStorage.key(i));
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}
sessionStorage.removeItem(key1);
console.log(sessionStorage.getItem(key1));
sessionStorage.clear();
console.log("---------------");
for (var i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}
// LOCAL: o local não tem uma data de expiração.. msm se fechar a aba ele permanece
var key3 = "localStorageKey";
// localStorage.setItem(key3,"Trying local storage");
console.log(localStorage.getItem(key3));
