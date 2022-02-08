// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let mayArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorName = mayArray[0];


function getName(mayArray){

    for(let i = 0; i < mayArray.length; i += 1){
        if(mayArray[i].length > maiorName.length){
            maiorName = mayArray[i];
        };
    };

    return maiorName;
};

console.log(getName(mayArray));