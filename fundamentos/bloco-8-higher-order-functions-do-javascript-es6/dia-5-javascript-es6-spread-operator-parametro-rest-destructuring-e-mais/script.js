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

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   // rectangleArea() // altere a chamada da funcao rectangleArea
//   // console.log(rectangle[0] * rectangle[1]);
//   console.log(rectangleArea(...rectangle));
// });

// // 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// // Dica: use parâmetro rest.


// const sumNumbers = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);

// console.log(sumNumbers(1,2,10,20,50));

// 3 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

// // Dica: use object destructuring.

// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

//     Dica: use object destructuring.

// const people = [
//   {
//     name: 'Nicole',
//     bornIn: 1992,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Harry',
//     bornIn: 2008,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Toby',
//     bornIn: 1901,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Frida',
//     bornIn: 1960,
//     nationality: 'Dannish',
//   },
//   {
//     name: 'Fernando',
//     bornIn: 2001,
//     nationality: 'Brazilian',
//   },
// ];

// // escreva filterPeople abaixo

// // const filterPeople = (arrayObjects) => arrayObjects.filter((person) => person.bornIn >= 1900 && person.bornIn < 2000 && person.nationality === 'Australian');

// const filterPeople = (arr) => arr.filter(({ nationality, bornIn }) => nationality === 'Australian' &&bornIn > 1900 && bornIn <= 2000);


// console.log(filterPeople(people));

// // 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

// // Dica: use array destructuring.

// const myList = [1, 2, 3];

// // escreva swap abaixo
// const swap = ([a, b, c]) => [ c, b, a];

// console.log(swap(myList));

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:

// // Dica: use array destructuring e abbreviation object literal.

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo

// const toObject = ([nome, marca, ano]) => ({nome, marca, ano});

// console.log(toObject(palio));

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

// Dica: use object destructuring.

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// // escreva shipLength abaixo

// const shipLength = ({name,length,measurementUnit})=> {
//   return `${name} is ${length} ${measurementUnit} long`
  
// }

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

// Dica: use default params.

// // escreva greet abaixo

// const greet = (nome, cumprimento = 'Hi') => `${cumprimento} ${nome}`;

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

// 9 - Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.

// Dica: use object destructuring e spread operator.
// OBS: As estações do ano aqui descritas têm base nas estações do hemisfério norte.


// const yearSeasons = {
//   spring: ['March', 'April', 'May'],
//   summer: ['June', 'July', 'August'],
//   autumn: ['September', 'October', 'November'],
//   winter: ['December', 'January', 'February'],
// };

// // const allMonths = ({spring, summer, autumn, winter}) => ([...spring,...summer,...autumn,...winter]);

// // console.log(yearSeasons);
// // console.log(allMonths(yearSeasons));

// const { spring, summer, autumn, winter } = yearSeasons;
// const months = [...spring, ...summer, ...autumn, ...winter];

// console.log(months);