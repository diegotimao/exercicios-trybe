// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const num = [60, 60, 60];
let triangulo;
let isValid;
let result;

for(let i = 0; i < num.length; i += 1){
    if(num[i] < 0){
        console.log('Este número não é válido para a operação.');
    }else {
        for(let index = 0; index < num.length; index +=1){
            result = result + num[index];
        }
    };
};

if(result == 180){
    triangulo = true;
}else {
    triangulo = false;
};

console.log(triangulo);


