// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...params) => {
  return params.reduce((prevnt, current) => prevnt + current);
}

console.log(sum(20, 30, 30))