// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let mayArray = [2, 4, 6, 7, 10, 0, -3];
let menorNumber = 0;


function getNumber(mayArray){
    for(let i = 0; i < mayArray.length; i += 1){
        if(mayArray[i] < menorNumber){
            menorNumber = i;
        }
    }

    return menorNumber;
}

console.log(getNumber(mayArray));