const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee } = require('./script');

describe('the function sum(a, b), return sum the parameter a and b', () => {
    it('1 - Test if return the sum(4, 5) and 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('2 - Test if return the sum(0, 0) and 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('3 - This if the sum function throws an error when parameters are', () => {
        expect(() => {sum(4, "5")}).toThrow();
    });

    it('4 - Test if the error message is "parameters must be numbers" when making the call', () => {
        expect(() => {sum(4, "5")}).toThrow("parameters must be numbers");
    });
});

describe('The function myRemove(arr, item) takes an array arr and returns a copy of that array without the item element if it exists in the array', () => {
    
    const array = [1, 2, 3, 4];
    
    it('1 - Checked if and call myRomove([1, 2, 3, 4], 3), return array expected', () => {
        expect(myRemove(array)).toEqual(array, 3)
    });

    it('2 - Checked if and call myRomove([1, 2, 3, 4], 3), is not return array expected', () => {
        expect(myRemove(array)).not.toContain(array, 3);
    });

    it('3 - Checked if and call myRomove([1, 2, 3, 4], 5) the return array expected', () => {
        expect(myRemove(array)).toEqual(array, 5);
    })
});

describe('The function myFizzBuzz(num), get number and return num divisible', () => {
    
    it('1 - Make a call with a number divisible by 3 and 5', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    });
    
    it('2 - Make a call with a number divisible by 3', () => {
        expect(myFizzBuzz(3)).toMatch('fizz');
    });

    it('3 - Make a call with a number divisible by 5', () => {
        expect(myFizzBuzz(15)).toMatch('buzz');
    });

    it('4 - If number not divisible per 3 or 5', () => {
        expect(myFizzBuzz(22)).toBe(22);
    });

    it('5 - If call with a number not number', () => {
        expect(myFizzBuzz('15')).toBeFalsy();
    });
});

describe('Test function encode and decode', () => {
    it('1 - Verify if encode exist', () => {
        expect(typeof encode).toBe('function');
    });

    it('2 - Verify if decode exist', () => {
        expect(typeof decode).toBe('function');
    });

    const myArrayStrings = ['a', 'e', 'i', 'o', 'u', 'b'];
    const myArrayNumber = [1, 2, 3, 4, 5, 6];
    const resultEncodeString = [1, 2, 3, 4, 5, 'b'];
    const resultDecodeNumber = ['a', 'e', 'i', 'o', 'u', 6];


    it('3 - Verify if encode transform vogais', () => {
        expect(encode(myArrayStrings)).toStrictEqual(resultEncodeString);
    });

    it('4 - Verify if decode transform numbers', () => {
        expect(decode(myArrayNumber)).toStrictEqual(resultDecodeNumber);
    });

    //Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
    it('5 - Verify if os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u ', () => {
        for(let i = 0; i <myArrayNumber.length; i += 1){
            expect(decode(myArrayNumber)[i]).toBe(resultDecodeNumber[i]);
        };
    });

    //Teste se as demais letras/números não são convertidos para cada caso;
    it('6 - Verfica se letras ou numeros não são convertidos', () => {
        expect(encode(myArrayStrings)[5]).toBe('b');
    })

    // Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâme

    it('6 - Verify if return encode tem o tamanho do array', () => {
        expect(decode(myArrayNumber).length).toBe(['a', 'e', 'i', 'o', 'u', 'b'].length);
    });
});


describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });

  describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });



  describe('Função Listagem de fúncionarios por paramêntro', () => {
    it('1 - Testa se a função searchEmployee etá definida', () => {
        expect(searchEmployee).toBeDefined();
    });

    it('2 - Testa se ela recebe o paramentro ID', () => {
        expect(searchEmployee('', 'firstName')).toBe('A função deve receber o ID e Detail como paramentro.');
    });

    it('3 - Testa se ela recebe o paramentro Detail', () => {
        expect(searchEmployee('4678-2', '')).toBe('A função deve receber o ID e Detail como paramentro.');
    }); 

    it('4 - Testa se existe um funcionario com o Id passado', () => {
        expect(searchEmployee('4678-10', 'firstName')).toBe('ID não identificada');
    });

    it('5 - Testa se existe um funcionario com o Detail', () => {
        expect(searchEmployee('4678-2', 'gender')).toBe('Informação indisponível');
    });
    
  })