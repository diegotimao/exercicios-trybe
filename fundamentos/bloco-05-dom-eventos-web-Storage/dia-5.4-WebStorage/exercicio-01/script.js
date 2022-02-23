// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ). 

// localStorage.setItem('myData', JSON.stringify(object));

const button = document.querySelector('.set-dark');
    button.value = 'on';

button.addEventListener('click', function(){

    if(button.value == 'on'){
        button.value = 'of';
        const body = document.querySelector('body');
        body.classList = 'dark-mode';
    }else if(button.value == 'of'){
        button.value = 'on'
        const body = document.querySelector('body');
        body.classList = 'lite-mode';
    }        

}, false);



