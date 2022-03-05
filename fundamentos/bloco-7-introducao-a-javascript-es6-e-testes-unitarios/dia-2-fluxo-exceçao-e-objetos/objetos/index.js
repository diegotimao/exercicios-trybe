/*
const customers = {
    firstName: 'Diego',
    age: 25,
    jog: 'Developer',
}

console.log(customers);

*/
//Existem também outras formas de adicionar essa propriedade
// de maneira muito mais simples e prática, sem a necessidade de reescrever o objeto e suas propriedades 

const customers1 = {
    firstName: 'Diego',
    age: 25,
    jog: 'Developer',
}


let newKay = 'lastName';
const lastName = 'Cavalcanti';
customers1[newKay] = lastName;
newKay = 'fullName';

const fullName = `${customers1.firstName} ${customers1.lastName}`;

// crie uma função que receba três parâmetros, sendo eles: um objeto, 
// o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const customers = {
    name: 'Diego',
    age: 25,
}

const newObject = (customers, teck, value) => {
    customers[teck] = value;
    return customers;
}

//console.log(newObject(customers, 'teck', 'Reactjs'));


const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

// for(const keys in coolestTvShow){
//     console.log(coolestTvShow[keys]);
// }

// const values = Object.values(coolestTvShow);

// for(const i in values){
//     if(values[i] === 'BoJack Horseman'){
//         console.log(values[i]);
//     }
// }

/* Object.keys - serve para criar um novo array contendo as chaves do objeto
   cada entrada do array retornado será uma string com o valor de cada chave do objeto.
*/

// const chaves = Object.keys(coolestTvShow);

// console.log(chaves);

// :uso - Object.keys(coolestTvShow);

//console.log(Object.keys(coolestTvShow));


const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSckills: 'Ótimo',
};

const student2 = {
    Html: 'Muito Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSckills: 'Ótimo',
    Git: 'Bom',
};

// const student = (student) => {
//     const arraySkills = Object.keys(student);

//     for(const index in arraySkills){
//         console.log(`${arraySkills[index]}, Nível: ${student[arraySkills[index]]}`)
//     }
// }

// console.log(student(student1));


// Object.values 
const listItem = (student1) => Object.values(student1);

// Object.entries

const listItems = Object.entries(student1)

for(i in listItems){
    console.log('----------Softskills-------------');
    console.log('Tecks:', listItems[i][0]);
    console.log('Nível:', listItems[i][1]);
}

//

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };


  // Esse método é utilizado para copiar os valores de todas as 
  // propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:
/*
    Object.assign(destino, objeto1);
    Object.assign(destino, objeto1, objeto2);
    Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
*/

const person = {
    name: 'Diego',
    lastName: 'Cavalcanti',
    age: 25,
};

const info = {
    city: 'Paulo Afonso',
    uf: 'Bahia',
};

const hobbye = {
    sport: 'Futebool',
    torce: 'Corinthias',
};

//o primeiro paramenro sempre será o destino, os restantes serão os copiados

Object.assign(person, info, hobbye);

// alterando o valor da propriedade do objeto
person.name = 'Anne Vitoria';
person.sport = 'Não torce'



// copiando objeto para uma variavel 

const clint = Object.assign({}, info, hobbye);

console.log(person);
console.log(clint);


