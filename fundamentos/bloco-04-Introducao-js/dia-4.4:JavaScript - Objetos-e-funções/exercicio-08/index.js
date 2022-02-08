// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let mayArray = [2, 3, 6, 7, 10, 1];
let maiorValue = 0;

function getNumber(mayArray){
    for(let i = 0; i < mayArray.length; i += 1){
        if(mayArray[i] > maiorValue){
            maiorValue = i;
        };
    };
    return maiorValue;
}

console.log(getNumber(mayArray));


