// Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch/case ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const num1 = 12;
const num2 = 33;
const opcao = "/";
let resultado;

switch(opcao){
    case "+": resultado = num1 + num2;
    console.log(resultado);
    break;

    case "-": resultado = num1 - num2;
    console.log(resultado);
    break;

    case "*": resultado = num1 * num2;
    console.log(resultado);
    break;

    case "/": resultado = num1 / num2;
    console.log(resultado);
    break;

    case "%": resultado = num1 % num2;
    console.log(resultado);
    break;
};



