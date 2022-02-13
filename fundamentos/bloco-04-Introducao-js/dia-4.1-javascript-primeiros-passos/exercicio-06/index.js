// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 
// 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
// A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, 
// e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .

var resultado = 'aprovado';

switch(resultado){
    case 'aprovado': console.log('Parabéns você foi aprovada em nosso processo seletivo.');
    break;

    case 'reprovada': console.log('Infelismente você não conseguiu ir adiante em nosso processo seletivo.');
    break;

    case 'lista': console.log('Irmamos que você foi classificada para a lista de espera, continue de olho no seu E-mail');
    break;
}