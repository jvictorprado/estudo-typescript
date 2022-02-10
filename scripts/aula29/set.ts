let namesSet = new Set<string>();
namesSet.add("João");
namesSet.add("Victor");
namesSet.add("João"); // Não adc pq o set é um conjunto, logo os elementos n se repetem
console.log(namesSet);

// outra forma de fazer :
let ns = new Set<string>(["Silva","Prado","Moura","Trigueiro","Santos","Araujo"]);
console.log(ns);
// alguns metodos
console.log(ns.has("Prado")); // checa se existe o elemento
console.log(ns.delete("Prado")); // deleta o elemento e retorna true(a n ser que o elemento nem exista, ai retorna false)
console.log(ns.has("Prado"));
console.log(ns.size);
// ns.clear(); // deleta td

//iterando
for(let i of ns){
    console.log(i);
}

ns.forEach((elem)=>{
    console.log(elem);
});