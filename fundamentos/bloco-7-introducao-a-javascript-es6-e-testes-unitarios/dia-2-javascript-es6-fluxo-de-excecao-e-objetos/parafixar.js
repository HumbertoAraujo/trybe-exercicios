// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// const customer = {
//   firstName: 'Roberto',
//   lastName: 'Faria', // Propriedade adicionada.
//   age: 22,
//   job: 'Teacher',
// };

// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   author: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(property);
// }

// // name
// // genre
// // author
// // favoriteCharacter
// // quote
// // seasons

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// // for (const property in coolestTvShow) {
// //   console.log(property);
// // }

// console.log(Object.keys(coolestTvShow));

// // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: '??timo',
//   SoftSkills: '??timo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: '??timo',
//   JavaScript: 'Ruim',
//   SoftSkills: '??timo',
//   Git: 'Bom', // chave adicionada
// };

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: '??timo',
//   SoftSkills: '??timo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: '??timo',
//   JavaScript: 'Ruim',
//   SoftSkills: '??timo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for (const index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, N??vel: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

// // BoJack Horseman
// // adult animation
// // Raphael Bob-Waksberg
// // Princess Carolyn
// // Princess Carolyn always lands on her feet.
// // 6

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// // for (const property in coolestTvShow) {
// //   console.log(coolestTvShow[property]);
// // }

// console.log(Object.values(coolestTvShow));

// // [
// //   'BoJack Horseman',
// //   'adult animation',
// //   'Raphael Bob-Waksberg',
// //   'Princess Carolyn',
// //   'Princess Carolyn always lands on her feet.'
// //    6
// // ]

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: '??timo',
//   SoftSkill: '??timo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// console.log(Object.entries(coolestTvShow));

// // [
// //   [ 'name', 'BoJack Horseman' ],
// //   [ 'genre', 'adult animation' ],
// //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
// //   [ 'favoriteCharacter', 'Princess Carolyn' ],
// //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
// //   [ 'seasons', 6 ]
// // ]

// const pa??ses = {
//   Fran??a: 'Paris',
//   Brasil: 'Bras??lia',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(pa??ses);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('Pa??s:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

// // A fun????o recebe um n??mero qualquer de par??metros. Todos s??o agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'Jo??o'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// /* Output
//   { name: 'Alberto',
//   lastName: 'Gomes',
//   age: 23,
//   job: 'engenheiro',
//   children: [ 'Maria', 'Jo??o' ],
//   wife: 'Ana'
//   } */

//   const person = {
//     name: 'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const clone = Object.assign(person, lastName);
  
//   console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
//   console.log(person); // { name: 'Roberto', lastName: 'Silva' }

//   clone.name = 'Maria';

// console.log('Mudando a propriedade name atrav??s do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName atrav??s do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// const obj = { value1: 10, value2: 11 };
// const cloneObj = obj;


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.table(`${Object.values(person)[0]} ${Object.values(lastName)[0]}`);
console.table(`${Object.values(newPerson)[0]} ${Object.values(newPerson)[1]}`);


