// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let mayArray = [];

for(let i = 0; i <= 50; i += 1){
    if(!(i % 2 == 0)){
        mayArray.push(i);
    };
};

console.log(mayArray);
