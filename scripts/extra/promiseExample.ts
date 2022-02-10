let ul = document.getElementById('users');
let url = "https://jsonplaceholder.typicode.com/users"; //url qualquer que retorna um JSON

fetch(url)
    .then((resp)=>resp.json()) //recebe os dados e converte em um JSON.       OBS: o fetch é um OBJETO do JS (ES6), que ja funciona como uma promise, com chamadas assincronas
    .then(function(data){      //depois que o JSON retorna
        console.log(data);

        return data.map(function(user){
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`;
            ul.appendChild(li);
        })
    })
    .catch((error) =>{
        console.log('Oops!' + error);
    });