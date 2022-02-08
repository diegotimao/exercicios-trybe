//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim';

for(let key in info){
    console.log(key);
};

// //Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for(let key in info){
    console.log(info[key]);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for(let key in info){
    if(key == 'recorrente' && info[key] == 'Sim' && info1[key] == 'Sim'){
        console.log('Ambos são recorentes');
    }else{
        console.log(info[key] + ' e ' + info1[key]);
    };
};



