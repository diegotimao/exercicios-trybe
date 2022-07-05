
const peoples = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas 
// as pessoas australianas que nasceram no século 20:

const filterPeople = () => {
  
  const peopleSeculo = peoples
  .filter((people) => people.bornIn < 2000 && people.nationality === 'Australian')
  .map((people) => people.name);

  const { name } = peopleSeculo;
  
  return name;

}

console.log(filterPeople());

// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com 
// o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:


