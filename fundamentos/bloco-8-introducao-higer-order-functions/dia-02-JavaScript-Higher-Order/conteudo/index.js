// // ForEach - Ele serve para percorrer todos os items de um array
// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   students.forEach((student, index) => {
//     if (student.grade >= 60) {
//       students[index].approved = 'Aprovado';
//     } else {
//       students[index].approved = 'Recuperação';
//     }
//   });
// }

// verifyGrades();

// console.log(students);


// 1 - Aqui na trybe estamos planejando um bot que vai enviar msg para as pessoas que ainda não terminaram o projeto, 
// o objetivo é lembrá-las do prazo e oferecer alguma ajuda, o bot só consegue enviar uma msg por vez. A msg deve ter o 
// formato: "Olá pessoa, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?"

// escreva sua função aqui.

// 2- A dinâmica de pessoas estudantes ajudando outras pessoas estudantes foi muito boa e produtiva, pensando nisso 
// estamos planejando um bot que nos ajudará a chamar mais pessoas pra ajudar nas próximas vezes, o critério que vamos 

// usar pra isso vai ser a pessoa ter terminado 100% do projeto. Lembrando que o bot só consegue enviar uma msg por vez.
//  A msg enviada deve seguir o seguinte padrão: "Olá pessoa, parabéns por ter finalizado 100% do projeto, o que vc acha 
//  de ajudar outras pessoas da turma a tbm entregarem o projeto?"

// escreva sua função aqui. 

const estudantes = [
  {
    nome: 'Joel',
    Projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    Projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald',
    Projeto: 'Trybewarts',
    status: 75,
  },
];

const regra = (student) => {
  return student.status < 80;
};

const boot = estudantes.find(regra);

console.log(`Olá ${boot.nome}, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?`);

const approved = (passed) => {
  return passed.status = 100;
};

const mentor = estudantes.find(approved);

console.log(`Olá ${mentor.nome}, parabéns por ter finalizado 100% do projeto, o que vc acha de ajudar outras pessoas da turma a tbm entregarem o projeto?`);




