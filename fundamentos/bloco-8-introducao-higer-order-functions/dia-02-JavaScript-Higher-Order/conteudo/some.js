/**
 * O método some() testa se ao menos um dos elementos no array 
 * passa no teste implementado pela função atribuída e retorna um valor true ou false.
 * A função some() executa a função callback uma vez para cada elemento presente no array até 
 * achar um onde o callback retorne um valor true. 
 * 
 * Basta um ser verdadeiro para que a função retorne true.
 */

const numbers = [1, 2, 3, 4, 20, 15];

const maiorQue10 = (item) => {
  return item > 50;
};

const result = numbers.some(maiorQue10);
console.log(result);

