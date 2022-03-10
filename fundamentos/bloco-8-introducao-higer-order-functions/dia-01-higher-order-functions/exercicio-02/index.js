// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id .
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente
// um email no formato nome_da_pessoa@trybe.com .

const list = [
  { id: 1, name: 'Diego Cavalcanti' },
  { id: 2, name: 'Daniel Person' },
  { id: 3, name: 'Daniel Person' }
];

const newEmployees = (createID ,params) => {
  const employees = {
    id: createID(),
    name: params,
  };
  list.push(employees);
  return list;
};

const createId = () => {
  let id = 1;
  if (list.length > 0) {
    const ultimoId = list.length - 1;
    id += ultimoId + 1;
    return id;
  };
  return id;
};

const createNewUser = (action, createId, name) => {
  return action(createId, name);
}

console.log(createNewUser(newEmployees, createId, 'Pedro'));