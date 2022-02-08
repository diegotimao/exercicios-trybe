// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' 
// e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim';

console.log(info);


//- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: 
// personagem
// origem
// nota
// recorrente

for(let key in info){
    console.log(key);
}

//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

for(let id in info){
    console.log(info[id]);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain',
    nota: 'Dells Four Color Comics #178',
    macPatinhas: 'Sim'
};

console.log(`${info.personagem} e ${info1.personagem}`);
