// Exemplos de Higher Order Functios

// Este conceito consiste em ter um maior reaproveitamento de código, podendo ultilizar funções em outras funções como paramentro 
// ou até mesmo usar funções como valor para variaveis.

// The function receive number and actions o return your return and actions with count 
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count)
  }
};

//verfica se number é par
// verify if number and par
const numberPar = (number) => {
  if (number % 2 === 0){
    console.log('Este número é par: ', number);
  }
};

//Verifica se o number é impar 
//Verfy if number and impar
const numberImpar = (number) => {
  if((number % 2 ) > 0){
    console.log('Este numero é impar: ', number);
  }
};

// repeat(3, numberImpar);
// repeat(20, numberPar);


const numberGenerator = () => {
  return Math.random() * 100;
};

// console.log(numberGenerator())

