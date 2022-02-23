// Acesse o elemento elementoOndeVoceEsta .
let element = document.getElementById('elementoOndeVoceEsta');

//Acesse pa i a partir de elementoOndeVoceEsta e adicione uma color a ele.
let elementPai = element.parentNode;
    elementPai.style.color = 'red';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos 
//da aula anterior, como fazer isso?

let elementFilho = element.firstElementChild;
    elementFilho.innerText = 'Deus é bom o tempo todo e o tempo todo Deus é bom.'

// Acesse o primeiroFilho a partir de pai .
let firstFilho = elementPai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let firstFilhoElement = element.firstElementChild;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let elementText = element.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let elementTerceiroFilho = element.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
let elementTerceiroFilhoPai = elementPai.nextElementSibling;


//Crie um irmão para elementoOndeVoceEsta .
let newItem = document.createElement('h1');
    newItem.innerText = 'Vamos com tudo Go Trybe';

    elementPai.appendChild(newItem);

//Crie um filho para elementoOndeVoceEsta .
let newSon = document.createElement('h2');
    newSon.innerText = 'Eu sou o elemento filho';

    element.appendChild(newSon);

//Crie um filho para primeiroFilhoDoFilho .
let newFistSon = document.createElement('h3');
    newFistSon.innerText = 'Eu sou o primeiro filho elemento';

    elementFilho.appendChild(newFistSon);

//A partir desse filho criado, acesse terceiroFilho .
let proximoSon = newFistSon.previousSibling;

    console.log(proximoSon);