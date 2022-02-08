//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = 'arara';
let novaPalavra = '';

function verificaPalavra(palavra){

    for(let i = palavra.length -1; i >= 0; i -= 1){
        novaPalavra = novaPalavra + palavra[i];
    }

    if(novaPalavra == palavra){
        return true;
    }else {
        return false;
    }

};

console.log(verificaPalavra(palavra));


