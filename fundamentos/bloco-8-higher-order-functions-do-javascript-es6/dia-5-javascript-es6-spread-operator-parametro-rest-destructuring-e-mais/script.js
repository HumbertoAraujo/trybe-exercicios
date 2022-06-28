// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */
// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5
// console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800
// console.log(Math.min(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 5

// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = { ...people, ...about };
// console.log(customer); /* {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer'
// } */

// // Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['melância', 'bergamota', 'morango'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['melão', 'abacaxi', 'laranja'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// Parâmetro Rest

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// const teste = [4, 7, 8, 9, 60];
// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(teste));

// const sum = (...[args]) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum([4, 7, 8, 9, 60]));

// Object Destructuring

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas

// // definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// // const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // const { name, age, homeWorld: { name: planetName }, description: { jedi: jedi } } = character;
// console.log(`Esse é o ${names}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// // imprimindo os valores:
// // console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);



// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;
// // const { a, b, c } = student;
// // console.log(a +" "+ b +" "+ c )


// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática


// Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name: cebola, price, seller }) => {
//   console.log(`Promoção! ${cebola} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// Para Fixar
// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };
// const userTotal = {...user, ...jobInfos};
// const {name, age, nationality, profession, squad, squadInitials} = userTotal;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
// console.log("Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic");


// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// const [saud, func] = saudacoes;
// console.log(saud);

// // A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';
// const array = [comida, animal, bebida];
// [animal, bebida, comida] = array;
// [comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// // [,,, ...numerosPares] = numerosPares;

// // console.log(numerosPares); // [6, 8, 10, 12];

// [,,, ...teste] = numerosPares;
// console.log(teste); // [6, 8, 10, 12];


// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
//   // nationality: 'teste',
// };

// const { nationality = 'Brazilian' } = person;

// console.log(nationality);

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

// const position2d = [1.0, 2.0];
// const [x=0, y =0, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

// // Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// Object Property Shorthand#########################################################

// const newUser = (id, name, email) => {
//   return {
//     id: id,
//     name: name,
//     email: email,
//   };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// const newUser = (id, name, email) => {
//   return {
//     id,
//     name,
//     email,
//   };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Default Parameters

// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!


// const greeting = (user = "Teste") => console.log(`Welcome ${user}!`);

// greeting('Humberto'); // Welcome undefined!

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

// const multiply = (number, value=1) => {
//   return number*value;
// };

// console.log(multiply(8));
// console.log(multiply(8,2));