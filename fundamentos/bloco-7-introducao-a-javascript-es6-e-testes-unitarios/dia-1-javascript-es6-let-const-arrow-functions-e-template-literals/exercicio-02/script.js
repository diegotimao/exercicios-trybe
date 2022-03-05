const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const longestWord = (frase) => {
    const array = frase.split(' '); 
    console.log(array);

    for(let i = 0; i < array.length; i += 1){
        let maiorPalavra = array[0];

        if(maiorPalavra.length > array[i].length){
            maiorPalavra = array[i];
        }
        
        return maiorPalavra;
    }
}

console.log(longestWord(frase));



