const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno =  (object, chave, value) => {
  object[chave] = value;

  return Object.entries(object);
}

//console.log(`Uma nova posição adicionada: ${addTurno(lesson2, 'turno', 'noite')}`);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const lessonsList = (params) => {
  const lessonsKey = Object.keys(params);

  return lessonsKey;
};

//console.log(`Chaves do objeto cadastradas: ${lessonsList(lesson3)}`);

// Crie uma função para mostrar o tamanho de um objeto.

const lessonsLeng = (params) => {
  const lessonLength = Object.keys(params).length;

  return lessonLength;
}

//console.log(`Existem: ${lessonsLeng(lesson1)}, items cadastrado.`);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const lessonsValue = (params) => {
  const lessonValues = Object.values(params);

  return lessonValues;
}

//console.log(`Esses são os valores que o Objeto contém: ${lessonsValue(lesson1)}`);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({},{ lesson1, lesson2, lesson3 });

console.log(allLessons);

const totalStudets = (params) => {
  const total = params.lesson1.numeroEstudantes + params.lesson2.numeroEstudantes + params.lesson3.numeroEstudantes;

  console.log(`O total de alunos é: ${total}`);
}

totalStudets(allLessons);

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValues = (paramas, position) => {
  const values = Object.values(paramas)[position];

  console.log(values);
}

getValues(lesson1, 0);

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const isValid = (object, params, value) => {
  const array = Object.entries(object);

  for(let i = 0; i < array.length; i += 1){
    if(array[i][0] === params && array[i][1] === value){
     return true;
    }
  }
  return false;
}

//console.log(isValid(lesson3, 'turno', 'noite'));


// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const getReportStudent = (params, materia) => {
  const totalStudent = Object.values(params);
  let total = 0;
  for(let i = 0; i < totalStudent.length; i += 1){
    if(totalStudent[i].materia === materia){
      total += totalStudent[i].numeroEstudantes;  
    }
  }

  return total;
}

console.log(getReportStudent(allLessons, 'Matemática'));


// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (params, teacher) => {
  const report = Object.values(params);
  let newReport;
  let aulasArray = [];

  for (let i = 0; i < report.length; i += 1) {
    if(report[i].professor === teacher){
      aulasArray.push(report[i].materia);

      newReport = {
        professor: report[i].professor,
        aulas: aulasArray,
        estudantes: getReportStudent(allLessons, report[i].materia), 
      };
    } 
  }

  return newReport;
}

console.log(createReport(allLessons, 'Carlos'));