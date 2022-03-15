// O reduce possui dois paramentros 

// EX: .reduce((aculador, current)) => { }

//const numbers = [32, 15, 3, 2, -5, 56, 10];

//const result = numbers.reduce((result, number) => result + number);
// console.log(result);

// const collction = [1, 2, 3, 4, 5];

// const getSum = (acumulador, number) => {
//   console.log(acumulador);
//   return acumulador + number;
// }

// const sumNumbers = collction.reduce(getSum, 0);

// console.log(sumNumbers);
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85


const number = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Solução usando o filter e reduce 
const sumPar = number.filter((item) => item % 2 !== 0).reduce((previosValue, number) => previosValue + number);

//console.log(sumPar);

// Solução usando apenas o reduce 

const sumPair = (currentValue, number) => ((number % 2 === 0) ? currentValue + number : currentValue);

const suNumbers = (array) => array.reduce(sumPair, 0);

//console.log(suNumbers(number, 0));

// Missão Filtrar os cães e calcular a idade

const animais = [
  {
    nome: 'Fumaça',
    idade: 3,
    tipo: 'cao'
  },
  {
    nome: 'Tobby',
    idade: 6,
    tipo: 'cao'
  },
  {
    nome: 'Laminha',
    idade: 1,
    tipo: 'gato'
  },
  {
    nome: 'Nutella',
    idade: 3,
    tipo: 'cao'
  },
];

const dogs = animais.filter((dog) => dog.tipo === 'cao');
const newArray = [];

dogs.forEach((item) => {
  newArray.push(item.idade);
});

const ageDogs = newArray.reduce((currentValue, value) => currentValue + value);

console.log(ageDogs)