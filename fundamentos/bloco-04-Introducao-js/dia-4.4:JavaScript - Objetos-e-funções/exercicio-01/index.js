//Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

player['bestInTheWord'] = [2006, 2007, 2008, 2009, 2010, 2018];

//cesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log(player.name + ' ' + player.lastName + ' ' +  'foi eleita a melhor do mundo por ' + player.bestInTheWord.length + ' vezes');

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro' + ' e ' + player.medals.silver + ' medalhas de prata');


console.table(player);

console.log(player.name + ' ' + player.lastName + ' ' + player.age);