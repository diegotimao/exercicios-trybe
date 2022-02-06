// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num = -12;
let result;

if(num < 0){
    result = 'Negativo';
}else{
    result = 'Positivo';
}

console.log(result);