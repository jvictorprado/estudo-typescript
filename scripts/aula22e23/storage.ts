// armazenamentos embutidos nos navegadores : session storage, local storage, indexDB 

// SESSION: funciona por abas.. se vc n fechar a aba sua seção n acaba.. tamanho max : 5 megabytes
let key1 = "key1";
let key2 = "key2";

console.log(sessionStorage.getItem(key1));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key1,"Prado");
sessionStorage.setItem(key2,"Silva");
console.log(sessionStorage.getItem(key1));
console.log(sessionStorage.getItem(key2));

for(let i = 0; i < sessionStorage.length; i++){
    // console.log(sessionStorage.key(i));
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}   
sessionStorage.removeItem(key1);
console.log(sessionStorage.getItem(key1));
sessionStorage.clear();
console.log("---------------");

for(let i = 0; i < sessionStorage.length; i++){
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}   


// LOCAL: o local não tem uma data de expiração.. msm se fechar a aba ele permanece
let key3 = "localStorageKey";
// localStorage.setItem(key3,"Trying local storage");
console.log(localStorage.getItem(key3));