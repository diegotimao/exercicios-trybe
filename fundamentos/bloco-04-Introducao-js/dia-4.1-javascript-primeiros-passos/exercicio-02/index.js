// No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, 
// isEnrolled, patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .

let patientId = 50;
let isEnrolled = true;

const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};

const patientEmail = 'ana@gmail.com';

console.log('patientId =', typeof patientEmail);
console.log('isEnrolled =', typeof isEnrolled);
console.log('patientInfo =', typeof patientEmail);


// Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const base = 5;
const heigth = 8;
const area = base * heigth;
const perimeter = (area + base + heigth);

console.log('Área total =', area);
console.log('Soma de todos os lados do Triângulo =', perimeter);