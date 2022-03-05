const frase = 'Xadres com x';
const palavra = 'Diego';

const ProcX = (frase, palavra) => {
    const newArray = [];

    for(let i = 0; i < frase.length; i += 1){

        if(frase[i] === 'X' || frase[i] === 'x'){
            newArray.push(palavra);
        }else {
            newArray.push(frase[i]);
        }
    }

    return newArray.join(' ');
}


console.log(ProcX(frase, palavra));