// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num1 = 10;
const num2 = 26;
const num3 = 25;
let maiorNum;

if(num1 > num2 && num1 > num3){
    maiorNum = num1;
}else if(num2 > num3){
    maiorNum = num2;
}else{
    maiorNum = num3;
};

console.log(maiorNum);