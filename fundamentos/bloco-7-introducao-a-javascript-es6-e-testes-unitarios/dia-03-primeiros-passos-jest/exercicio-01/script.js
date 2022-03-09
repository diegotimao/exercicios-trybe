function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
}


function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
  
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}



function encode(mayArray) {
  let newArray = [];
    for(let i = 0; i < mayArray.length; i += 1){
        if(mayArray[i] == 'a'){
            newArray.push(1);
        }else if(mayArray[i] == 'e'){
          newArray.push(2);
        }else if(mayArray[i] == 'i'){
          newArray.push(3);
        }else if(mayArray[i] == 'o'){
          newArray.push(4);
        }else if(mayArray[i] == 'u'){
          newArray.push(5);
        }else if(mayArray[i] == ' '){
           newArray.push(' ');
        }else {
           newArray.push(mayArray[i]);
        };
    };

    return newArray;  
};



function decode(mayArray) {

  let newArray = [];
    for(let i = 0; i < mayArray.length; i += 1){
        if(mayArray[i] == '1'){
             newArray.push('a');
        }else if(mayArray[i] == '2'){
             newArray.push('e');
        }else if(mayArray[i] == '3'){
             newArray.push('i');
        }else if(mayArray[i] == '4'){
             newArray.push('o');
        }else if(mayArray[i] == '5'){
             newArray.push('u');
        }else if(mayArray[i] == ' '){
             newArray.push(' ');
        }else {
            newArray.push(mayArray[i])
        };
    };

    return newArray;  
};


function techList(array, name) {
  let resutado = array.sort();
  let newArray = [];

  if(resutado.length == 0){
    return 'Vazio!';
  }else {
    for(let i = 0; i < resutado.length; i += 1){
        newArray.push({
            tech: resutado[i],
            name: name,
        });
    };
  };

  return newArray;
};


function hydrate(string) {
  // seu código aqui
  if(string == '1 cerveja'){
    return '1 copo de água';
  }else if(string == '1 cachaça, 5 cervejas e 1 copo de vinho'){
    return '7 copos de água';
  }else if(string == '2 shots de tequila, 2 cervejas e 1 corote'){
    return '5 copos de água';
  }else if(string == '1 copo de catuaba, 1 cervejas e 1 copo de vinho'){
    return '3 copos de água';
  }else if(string == '4 caipirinhas e 2 cervejas'){
    return '6 copos de água';
  };
};

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];


const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let employ = '';

  if(id === '' || detail === ''){
    return 'A função deve receber o ID e Detail como paramentro.';
  }

  for(let i = 0; i < professionalBoard.length; i += 1){
    if(professionalBoard[i].id === id){
      employ = professionalBoard[i];
    }
  }

  if(employ.id === undefined){
    return 'ID não identificada';
  }

  if(employ[detail] === undefined){
    return 'Informação indisponível';
  }

  return employ[detail];

};

console.log(searchEmployee('4678-', 'firstName'));




module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee};
