const numberIsValid = (value1, value2) => {
    if (value1 === '' || value2 === '') {
        throw new Error('Todos os Campos devem ser preenchidos')
    } else if (isNaN(value1) || isNaN(value2)){
        throw new Error('Os valores devem ser do tipo númerico.');
    } else if (value1 <= 0 || value2 <= 0){
        throw new Error('Valor inserido Invalido');
    }
};

function sum() {
    try {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        
        numberIsValid(value1, value2);

        const result = parseInt(value1) + parseInt(value2);    
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch (error) {
        document.getElementById('result').innerHTML = `${error.message}`;
    }finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}
