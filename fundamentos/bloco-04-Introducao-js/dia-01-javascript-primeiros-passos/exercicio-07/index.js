// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, 
// a e b , definidas no começo com os valores que serão operados. Faça programas para:


const operação = '+';
const a = 15;
const b = 12;
let resultado;

switch(operação){
    case '+': resultado = a + b;
    console.log(resultado);
    break;
    
    case '-': resultado = a - b;
    console.log(resultado);
    break;
    
    case '*': resultado = a * b;
    console.log(resultado);
    break;
    
    case '/': resultado = a / b;
    console.log(resultado);
    break;
    
    case '%': resultado = a % b;
    console.log(resultado);
    break;
    
}