

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1
// for (let number of numbers ){
//     console.log(number);
// }

//Exercício 2
// let soma = 0;
// for (let number of numbers){
//     soma += number;
// }
// console.log(soma);

//Exercício 3
// let soma = 0;
// for (let number of numbers){
//     soma += number;
// }
// let media = soma / numbers.length;
// console.log(media);

//Exercício 4
// let soma = 0;
// for (let number of numbers){
//     soma += number;
// }
// let media = soma / numbers.length;
// if (media > 20){
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20");
// }
//Exercício 5
// let aux = 0;
// for (number of numbers){
//     if (number > aux) {
//         aux = number
//     }
// }
// console.log(aux);

//Exercício 6
// let qtdImpar = 0;

// for (number of numbers){
//     if (number % 2 != 0){
//         qtdImpar += 1
//     }
// }
// if (qtdImpar > 0) {
//     console.log(qtdImpar);
// } else {
//     console.log("nenhum valor ímpar encontrado");
// }

//Exercício 7

// let aux = 100000000000000000000000000000000000000000000000000000000000000000000;
// for (number of numbers){
//     if (number < aux) {
//         aux = number
//     }
// }
// console.log(aux);

//Exercício 8

// let newArray = [];
// for (let index = 1; index <= 25; index += 1){
//     newArray.push(index);
// }
// console.log(newArray);

//Exercício 9

// let newArray = [];
// for (let index = 1; index <= 25; index += 1){
//     newArray.push(index);
// }
// for (number of newArray){
//     console.log(number / 2);
// }

// Bônus
// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// numbers.sort((a,b) => {
//     return a-b;
// })
// console.log(numbers);

// Exercício 2

// numbers.sort((a,b) => {
//     return b-a;
// })
// console.log(numbers);

// Exercício 3

let newArray = [];
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index + 1] == null){
        newArray.push(numbers[index]*2)
    } else {
        newArray.push(numbers[index] * numbers[index+1])
    }
}
console.log(newArray);