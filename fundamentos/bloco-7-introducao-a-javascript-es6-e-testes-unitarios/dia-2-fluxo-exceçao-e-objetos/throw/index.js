//Capturando erro com o Trow new Error

const sumer = (num1, num2) => {
    // Typeof serve para verificar o tipo dos dados passados 
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Os valores devem ser númericos.');
        // Throw new Error - Serve para criar um novo objeto de erro
    }

    return num1 + num2;
};

//console.log(sumer(5, true)); 



//Capturando error com o try/catch

// Se os valores passados pela função (sum): não forem do tipo number ela vai criar um objeto 
// de error

const verifyIsNumber = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Os valore devem ser númericos');
    }
};

// Ao passar os valores para a função (sum), primeiro é verificado o try - que chama a função
// verfyIsNumber que verifica se os valores são do tipo numericos

const sum = (num1, num2) => {
    try {
        verifyIsNumber(num1, num2);
        return num1 + num2;
    } catch (error) {
        throw error.message; // Propriedades do objeto erro
    }
}

console.log(sum(5, 5));