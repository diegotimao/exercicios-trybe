// Importação 
const fetch = require('node-fetch');

// O .then()  => recebe o retorno caso a requisição seja bem sucedida, 
// O .catch() => recebe o erro gerado caso a requisição não seja bem sucedida,

// Como é passado para ele? 

// como argumento de sua função interna. Assim, quando o fetch retorna algum erro, todos os .then() 
// são pulados e é executado o primeiro .catch() encontrado. E tem mais! O .catch() também "pega" 
// qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo ele é 
// geralmente usado no final.

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log('Algo deu errado :('));
};

// fetchJoke();

// Usando o async 

const fetchJokes = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log('Algo deu errado :('));
  
  console.log(result);
};

fetchJokes();