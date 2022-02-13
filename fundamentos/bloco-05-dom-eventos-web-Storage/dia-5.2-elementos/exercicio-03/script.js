// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const sonBody = document.querySelector('body');

const createText = document.createElement('h1');
    createText.innerText = 'Exercício 5.2 - JavaScript DOM';

    sonBody.appendChild(createText);

// 2- Adicione a tag main com a classe main-content como filho da tag body ;
const createMain = document.createElement('main');
    createMain.className = 'main-content';
    createMain.innerText = 'Diego'; 

    sonBody.appendChild(createMain);

// 3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const createSection = document.createElement('section');
    createSection.className = 'center-content';

    createMain.appendChild(createSection);

// 4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const createP = document.createElement('p');
    createP.innerText = 'Deus é bom o tempo todo.';

    createSection.appendChild(createP);

// 5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const newSectio = document.createElement('section');
    newSectio.className = 'left-content';
    createSection.appendChild(newSectio);

// 6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const createSectionTo = document.createElement('section');
    createSectionTo.className = 'rigth-content';

    createMain.appendChild(createSectionTo);

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 
//e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

const img = document.createElement('img');
    img.src = 'https://picsum.photos/200';
    createSection.appendChild(img);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


const list = [
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
];

const listItem = document.createElement('ul');

    createSectionTo.appendChild(listItem);
    
    for(let i = 0; i < list.length; i += 1){
        let items = list[i];
        
        const listItems = document.createElement('li');
            listItems.innerText = items;
            listItem.appendChild(listItems);
    };



// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

const title = [
    'O homen na lua',
    'Marte terá pessoas até 2030',
    'Brasil não é só o Rio de Janeiro',
];

for(let i = 0; i < title.length; i += 1){
    const titles = title[i];
    const subTitle = document.createElement('h3');

    subTitle.innerText = titles;
    subTitle.className = 'description';
    createMain.appendChild(subTitle);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:


// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.


// Adicione a classe title na tag h1 criada;
createText.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;

