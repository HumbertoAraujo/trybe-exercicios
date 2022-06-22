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

