/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    */

    // Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    function slipTexto(){
        const paragraph = document.getElementById('paragraph');
            paragraph.innerText = 'Me vejo com o meu caro, minha casa e trabalhando como programador.'; 
    };

    //x Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    function slipCor(){
        const quadradoCor = document.getElementsByClassName('main-content');
            quadradoCor[0].style.backgroundColor = "rgb(76,164,109";
    };

    //x Crie uma função que mude a cor do quadrado vermelho para branco.
    function slipCorQuadro(){
        const quadradoMeio = document.getElementsByClassName('center-content');
            quadradoMeio[0].style.backgroundColor = 'white';
    };

    //x Crie uma função que corrija o texto da tag <h1>.
    function curectText(){
        const text = document.getElementsByTagName('h1');
            text[0].style.color = 'red';
            text[0].innerText = 'Exercício 5.1 - JavaScript';
    };

    //x Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    function textTransform(){
        const text = document.getElementById('paragraph');
            text.style.textTransform = 'uppercase';
    };

    //x Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    function displayP(){
        const textExibe = document.getElementsByTagName('p');

        for(let i = 0; i < textExibe.length; i += 1){
            console.log(textExibe[i]);
        };
    };

    slipTexto();
    slipCor();
    slipCorQuadro();
    curectText();
    textTransform();
    displayP();
