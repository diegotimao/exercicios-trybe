/* 
O forEach percorre o array e executa a função passada para cada um 
dos seus valores. O forEach não retorna nenhum valor.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (item) => {
  console.log(`${item} * 2: ${item * 2}`);
};

//numbers.forEach(multipliesFor2);

const nomes = ['Diego', 'Anne', 'Maria', 'Flavia'];

const tranformToUppercase = (item, index) => {
  nomes[index] = item.toUpperCase();
};

nomes.forEach(tranformToUppercase);
// console.log(nomes);

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach((item) => {
  showEmailList(item);
});


const menorName = () => {
  let nameBook;

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

console.log(menorName());