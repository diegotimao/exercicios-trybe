//Considere o array de strings abaixo:
//let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorP;
let menorP;

for(let i = 0; i < array.length; i +=1){
    if(i == 0){
        maiorP = array[i];
        menorP = array[i];
    }else {
        if(maiorP.length < array[i].length){
            maiorP = array[i];
        }else{
            menorP = array[i];
        };
    };  
};

console.log('A maior palavra é: ', maiorP);
console.log('A menor palavra é: ',menorP);

