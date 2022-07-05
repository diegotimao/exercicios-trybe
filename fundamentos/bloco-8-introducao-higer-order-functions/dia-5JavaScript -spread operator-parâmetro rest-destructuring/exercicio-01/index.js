// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçâ', 'Goiaba', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Morango', 'Pera', 'Leite Condençado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui

  const newFruitSalad = [...fruit, ...additional];

  return newFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));