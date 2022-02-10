var ul = document.getElementById('users');
var url = "https://jsonplaceholder.typicode.com/users"; //url qualquer que retorna um JSON
fetch(url)
    .then(function (resp) { return resp.json(); }) //recebe os dados e converte em um JSON.       OBS: o fetch é um OBJETO do JS (ES6), que ja funciona como uma promise, com chamadas assincronas
    .then(function (data) {
    console.log(data);
    return data.map(function (user) {
        var li = document.createElement('li');
        li.innerHTML = "".concat(user.name, " (").concat(user.username, ")");
        ul.appendChild(li);
    });
})["catch"](function (error) {
    console.log('Oops!' + error);
});
