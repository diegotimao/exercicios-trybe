function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function createDateDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    

    for(let i = 0; i < dezDaysList.length; i += 1){
        const listaDate = document.createElement('li');
        const days = document.querySelector('#days');

        if(dezDaysList[i] == 24){
            listaDate.classList = 'day holiday';
            listaDate.innerText = dezDaysList[i];
            days.appendChild(listaDate);
        }else if(dezDaysList[i] == 31){
            listaDate.classList = 'day holiday';
            listaDate.innerText = dezDaysList[i];  
            days.appendChild(listaDate);
        }else if(dezDaysList[i] == 4){
            listaDate.classList = 'day friday';
            listaDate.innerText = dezDaysList[i];  
            days.appendChild(listaDate);
        }else if(dezDaysList[i] == 11){
            listaDate.classList = 'day friday';
            listaDate.innerText = dezDaysList[i];  
            days.appendChild(listaDate);
        }else if(dezDaysList[i] == 18){
            listaDate.classList = 'day friday';
            listaDate.innerText = dezDaysList[i];  
            days.appendChild(listaDate);
        }else if(dezDaysList[i] == 25){
            listaDate.classList = 'day friday holiday';
            listaDate.innerText = dezDaysList[i];  
            days.appendChild(listaDate);
        }else {
            listaDate.classList = 'day';
            listaDate.innerText = dezDaysList[i];
            days.appendChild(listaDate);
        };
    };
};

createDateDays();


function friday(){
    const buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.classList = 'btn-holiday';
    button.innerText = 'Feriados';
    buttonContainer.appendChild(button);
}

friday();

const button = document.querySelector('.btn-holiday');

button.addEventListener('click', function(event){
    console.log(event.isTrusted == true);

    const friday = document.querySelectorAll('.holiday');
    
    for(let i = 0; i < friday.length; i += 1){
        let index = friday[i];

        index.style.backgroundColor = '#6C63FF';
        index.style.color = 'white'
    }
});


// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function addButton(value){
    const button = document.querySelector('.buttons-container');
    const newButton = document.createElement('button');
        newButton.classList = 'btn-fryday';
        newButton.innerText = value;
        newButton.value = 'disable';
        button.appendChild(newButton);
}

addButton('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const btnFriday = document.querySelector('.btn-fryday');
   
btnFriday.addEventListener('click', checkValue);

function checkValue(){
    if(btnFriday.value == 'disable'){
        btnFriday.value = 'selected';
    }else if(btnFriday.value == 'selected'){
        btnFriday.value = 'disable';
    }

    const valor = btnFriday.value;

    displayFriday(valor);
}

function displayFriday(value){
    const daysItems = document.querySelectorAll('.friday');
    console.log(value);

    if(value == 'selected'){
        for(let i = 0; i < daysItems.length; i += 1){
            const item = daysItems[i];
            let text = document.createElement('span');
            text.innerText = 'Sextouuuuuuuuuuuuuuu';
            text.style.display = 'block'
            item.appendChild(text);

            item.style.backgroundColor = '#306FAB';
         }
    }else if(value == 'disable'){

        for(let i = 0; i < daysItems.length; i += 1){
            const item = daysItems[i];
            item.style.backgroundColor = '#eee';
         };
    };
};




// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .


// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .











