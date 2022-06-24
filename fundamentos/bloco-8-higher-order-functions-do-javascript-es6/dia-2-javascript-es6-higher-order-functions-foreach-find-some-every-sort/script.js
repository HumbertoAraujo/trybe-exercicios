// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   for (let i = 0; i < students.length; i += 1) {
//     const student = students[i];
//     if (student.grade >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// // Usando forEach, é assim que você faria a mesma coisa:

// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   students.forEach((student, index) => {
//     if (student.grade >= 60) {
//       students[index].approved = 'Aprovado';
//     } else {
//       students[index].approved = 'Recuperação';
//     }
//   });
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((x) => x % 5 === 0);

// console.log(firstMultipleOf5);
// // // 50

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element, index) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Este é o indice', index);
// });

// // Cada elemento do array: josé
// // Cada elemento do array: 50
// // Cada elemento do array: 0.25
// // // Cada elemento do array: { comida: 'Chocolate' }

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Index, posição do elemento:', indexOfTheArray);
//   console.log('Array percorrido:', theEntireArray);
// });

// // => ---------------
// //   Cada elemento do array: josé
// //   Index, posição do elemento: 0
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
// //   ---------------
// //   Cada elemento do array: 50
// //   Index, posição do elemento: 1
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
// //   ---------------
// //   Cada elemento do array: 0.25
// //   Index, posição do elemento: 2
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
// //   ---------------
// //   Cada elemento do array: { comida: 'Chocolate' }
// //   Index, posição do elemento: 3
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// // Adicione seu código aqui
// // emailListInData.forEach((showEmailList));

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// // console.log(isEven); // 30

// // console.log(verifyEven(9)); // False
// // console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//   return numbers.find((number) => number % 3 === 0 && number % 5 === 0);  
// }

// console.log(findDivisibleBy3And5())

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   return names.find((name) => name.length === 5); 
// }

// console.log(findNameWithFiveLetters());

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   return musicas.find((musica) => musica.id === id);
// }

// console.log(findMusic('31031685'))

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Aprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((nome) => nome === name );
// }

// console.log(hasName(names, 'Bruna'))

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 18 },
//   { name: 'Ana', age: 17 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((objeto)=> objeto.age >= minimumAge);
// }

// console.log(verifyAges(people, 18));

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// // food.sort();
// // console.log(food);
// console.log(food.sort());
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]


// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((objetoA, objetoB) => objetoA.age - objetoB.age);

// console.log(people);

// people.sort((objetoA, objetoB) => objetoB.age - objetoA.age);

// console.log(people);