const estudantes = require('./students');

// mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !
// percorrer o array com o map 
// dentro do map usar o reduce para achar a maior nota

const studentMap = estudantes.map((item) => {
  const newObject= {
    aluno: item.nome,
    maiorNota: item.materias.reduce((prev, prox) => (prev.nota > prox.nota) ? prev.nota : prox.nota),
  };

  return newObject;
})

console.log(studentMap);

