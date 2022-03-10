// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo.
// Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const gerarDano = () => {
  // dano > 15 && dano < strength;
  const danoMin = 15;
  let dano = Math.floor(Math.random() * (dragon.strength - danoMin + 1) + danoMin);
  return dano;
};

// Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const danoWarrior = () => {
  const danoMin = warrior.strength;
  const danoMax = warrior.weaponDmg * danoMin;

  let dano = Math.floor(Math.random() * (danoMax - danoMin + 1) + danoMin);

  return dano;
};

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

// A mana consumida por turno é 15. 
//Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano 
// recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const manaConsul = () => {
  const intelligence = mage.intelligence;
  const manaConsul = 15;

  const dano = Math.floor(Math.random() * ((intelligence * 2) - intelligence + 1)) + intelligence;
  
  if(mage.mana < 15) {
    return {
      dano: 'Não possui mana suficiente',
      manaGasta: 0,
    }
  }

  return {
    dano: dano,
    manaGasta: manaConsul,
  }
};

// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, 
// passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será 
// composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:


// Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá 
// como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . 
// Além disto ela também deve atualizar o valor da chave damage do warrior .


// Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como 
// parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela 
// também deve atualizar o valor das chaves damage e mana do mage.


// Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como 
// parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além 
// disto ela também deve atualizar o valor da chave damage do monstro.

const gameActions = {
  warriorTurn: (callback) => {
    const danoCausa = callback();
    dragon.healthPoints -= danoCausa;
    
    warrior.damage = danoCausa;
  },
  
  mageTurn: (callback) => {
    const danoCausa = callback();
    dragon.healthPoints -= danoCausa.dano;
    mage.damage = danoCausa.dano;
    mage.mana -= danoCausa.manaGasta;
  },
  
  //atualizará os healthPoints dos personagens mage e warrior
  dragonTurn: (callback) => {
    const danoCausa = callback();
    mage.healthPoints -= danoCausa;
    warrior.healthPoints -= danoCausa;
    dragon.damage = danoCausa;
  }, 

  status: () => {
    console.log(dragon);
    console.log(warrior);
    console.log(mage);
  }
};

// Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

gameActions.warriorTurn(danoWarrior);
gameActions.mageTurn(manaConsul);
gameActions.dragonTurn(gerarDano);
gameActions.status();
