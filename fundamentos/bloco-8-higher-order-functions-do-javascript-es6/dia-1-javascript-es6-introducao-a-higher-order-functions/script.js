// function sum (number1, number2) {
//   return number1 + number2;
// }

// const sumVariable = sum;

// console.log(sumVariable(a,e));

// const sayHello = () => {
//   return ('hello trybers');
// }

// const printGreeting = (callback) => {
//     console.log(callback());
// }

// printGreeting(sayHello);

// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }
// const initialSum = sumFixAmount(15)
// console.log(initialSum(1));
// const repeat = (number, initial, action) => {
//   for (let count = initial; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, 3, console.log);

// const repeat = (number, initial, action) => {
//   for (let count = initial; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(10, 1, (teste) => {
//   if (teste % 2 === 0) {
//     console.log(teste, 'is even');
//   }
// });

// const repeat = (number, initial, action) => {
//   for (let count = initial; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, 1, isEven); // Testa quais números serão pares;
// repeat(3, 1, isOdd); // Testa quais números serão ímpares;

// const numberGenerator = () => {
//   return Math.random() * 100;
// }

// console.log(Math.floor(numberGenerator()));

// Para fixar
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// const wakeUp = () => 'Acordando!!';
// const drinkCoffee = () => 'Bora tomar café!!';
// const sleep = () => 'Partiu dormir!!';

// const doingThings = (func) => console.log(func);

// doingThings(wakeUp());
// doingThings(drinkCoffee());
// doingThings(sleep());

// EXERCÍCIO UM FIZ CRIANDO UMA FORMA DE CADASTRO MAIS REAL:

// const employees = {};

// const newEmail = (name) => {
//   let nameEdited = name.toLowerCase().replace(/ /g, '_');
//   nameEdited = nameEdited.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
//   const newObject = {
//     nome: name,
//     email: `${nameEdited}@trybe.com`,
//   }
//   return newObject
// }; 

// const newEmployees = (callback, name) => {  
//   if (name && callback){
//     const lastId = Object.keys(employees).length;
//     let newId = `id${lastId + 1}`; 
//     const newEmployeesObject = {};
//     newEmployeesObject[newId] = callback(name);         
//     Object.assign(employees, newEmployeesObject);
//   }
//   return employees;
// };
// console.log(newEmployees(newEmail, "Pedro Guerra"));
// console.log(newEmployees(newEmail, "Luiza Drumond"));
// console.log(newEmployees(newEmail, "Carla Paiva"));

// FIM MINHA INTERPRETAÇÃO DO EXERCÍCIO 1

// EXERCÍCIO 1 resolução do Gabarito sem tratar acentos e ç:

// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));

// EXERCÍCIO 2 minha lógica:

// const raffleCheck = (numberBet) => {
//   const drawnNumber = Math.floor((Math.random()* 5) + 1);
//   console.log(`O número aposta foi ${numberBet}, e o número sorteado foi ${drawnNumber}`);
//   if (numberBet === drawnNumber) {
//     return true
//    } return false;
// }
// // const raffle = (numberBet, callback) => {
// //   if (callback(numberBet)){
// //     return "Parabéns você ganhou"
// //   } return "Tente novamente"
// // }

// const raffle = (numberBet, callback) => callback(numberBet) ? "Parabéns você ganhou" : "Tente novamente";

// console.log(raffle(4, raffleCheck));

// FIM EXERCÍCIO 2 minha lógica:

// EXERCÍCIO 2 GABARITO:

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));

// FIM EXERCÍCIO 2 GABARITO:

// EXERCÍCIO 3 minha lógica:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResposta = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer){
    return 1;
  } if (studentAnswer === 'N.A'){
    return 0;
  }
  return -0.5;

}

const newHof = (arrayGabarito, arrayRespostas, callback) => {
  let counter = 0;
  for (let index = 0; index < arrayGabarito.length; index += 1 ){
    counter += callback(arrayGabarito[index],arrayRespostas[index]);
  }
  return `A nota final ficou em ${counter} pontos`;
}

console.log(newHof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResposta));