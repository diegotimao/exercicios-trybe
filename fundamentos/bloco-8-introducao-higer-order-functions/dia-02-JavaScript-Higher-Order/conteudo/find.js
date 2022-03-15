/**
 * O método find() retorna o valor do primeiro elemento do array que 
 * satisfizer a função de teste provida. Caso contrario, undefined é retornado.
*/

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

const nomes = [
  {name: 'Diego', idade: 23},
  {name: 'Anne', idade: 19},
  {name: 'Maria', idade: 32},
];

// Variavel nome que recebe Maria
const nome = 'Maria';

const result = nomes.find(item => item.name === nome);
console.log(result); // Espera-se que o retorno seja 'Maria'


// Retorna o primeiro valor que satisfaça a condição
const numbers = [19, 21, 30, 3, 45, 22, 15];

const value = numbers.find(item => item == 19);
console.log(value); // Espera-se que o retorno seja 2

const verifyEven = numbers.find(number => number % 2 === 0);

console.log(verifyEven);

// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const numDivider = numbers.find(item => item % 3 === 0 || item % 5 === 0);

  return numDivider;
}

console.log(findDivisibleBy3And5())

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const name = names.find(item => item.length === 5);
  return name;
}

console.log(findNameWithFiveLetters());


// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const music = musicas.find(item => item.id === id);
  return music;
}

console.log(findMusic('31031685'));