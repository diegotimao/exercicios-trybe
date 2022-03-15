const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947() {
  // escreva aqui o seu código
  const verifyYars = (item) => {
    return item.author.birthYear === 1947; 
  };

  return books.find(verifyYars).name;
};

// console.log(authorBornIn1947());


// Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  const menorNome = (book) => {
    if(!nameBook || book.name.length < nameBook.length ) {
      nameBook = book.name;
    }
  } 

  books.forEach(menorNome);

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

console.log(smallerName());

function getNamedBook() {
  // escreva seu código aqui
  return books.find(item => item.name.length === 26);
};

console.log(getNamedBook());

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return expectedResult.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc());


function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return expectedResult.every(item => item.releaseYear < 2000);
};

console.log(everyoneWasBornOnSecXX());


function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return expectedResult.some(item => item.releaseYear > 1980 || item.releaseYear < 1990);
};

console.log(someBookWasReleaseOnThe80s());


//  Faça uma função que retorne true , caso nenhum author tenha nascido 
//  no mesmo ano, e false , caso contrário.

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) => !books.some((bookSome) => 
  (bookSome.author.birthYear === book.author.birthYear) 
  && (bookSome.author.name !== book.author.name))
  );
}

console.log(authorUnique())
