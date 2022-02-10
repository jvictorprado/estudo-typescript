// LEMBRAR DE TRANSPILAR ASSIM : tsc --downlevelIteration .\map.ts

let nameAge = new Map<string,number>();
nameAge.set("Gon",14);
nameAge.set("Killua",14);
console.log(nameAge);
nameAge.set("Gon",15); // sobrescreve o valor para essa chave
console.log(nameAge);

//OUTRA MANEIRA 
let nameAge2 = new Map<string,number>().set("Leorio",16).set("Kurapika",15);
console.log(nameAge2);

//MAIS UMA MANEIRA
let animeEpisodes = new Map<string, number>([
    ["DBZ",200],["HXH",190]
]);
console.log(animeEpisodes);
// * alguns metodos do MAP:
console.log(animeEpisodes.get("DBZ")); // retorna o valor referente a essa chave
console.log(animeEpisodes.has("DBZ")); //retorna se o valor existe ou n
// console.log(animeEpisodes.delete("DBZ")); //deleta o valor e retorna true
//animeEpisodes.clear(); //Limpa tudo
// console.log(animeEpisodes.has("DBZ"));

//ITERANDO
for(let k of animeEpisodes.keys()){
    console.log(k);
}
for(let v of animeEpisodes.values()){
    console.log(v);
}
for(let ent of animeEpisodes.entries()){
    // console.log(ent);
    console.log(`${ent[0]} | ${ent[1]}`);
}
for(let ent of animeEpisodes){ // funciona da msm forma que com entries
    // console.log(ent);
    console.log(`${ent[0]} | ${ent[1]}`);
}

//DESTRUCTURING
for(let [key,value] of animeEpisodes.entries()){
    console.log(`${key} | ${value}`);
}