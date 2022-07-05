// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária 
// e outro com informações referentes ao cargo desta pessoa usuária na empresa 
// trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados 
// pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .


const user = {
  nome: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const funcionario = {...user, ...jobInfos};

const {nome, age, nationality, profession, squadInitials, squad } = funcionario;

const message = `Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`

console.log(message)