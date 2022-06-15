// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// // Parte II EXERCÍCIO 1  

// const customerInfo = (order) => {
//   const address = 'address';
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const customerName = order['name'];
//   const customerPhone = order['phoneNumber'];
//   const street = order[address].street;
//   const number = order[address].number;
//   const apartment = order[address].apartment;

//   console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
// }

// customerInfo(order);

// // Parte II EXERCÍCIO 1 


// const orderModifier = (order) => {
//   const newBuyer = order.name = 'Luiz Silva';
//   const pizzas = Object.keys(order.order.pizza);
//   const drinks = order.order.drinks.coke.type;
//   const newTotal = order.payment.total = '50';

//   console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
// }

// orderModifier(order);

// Parte III

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercício 1

const newFunction = (objeto, chave, valor) => {
  objeto[chave] = valor;
}


newFunction(lesson2, 'turno', 'noite');


// exercício 2

const listKeys = objeto => {
  // console.log(Object.keys(objeto));

}

listKeys(lesson2);

// exercício 3

const lengthtObject = objeto => {
  // console.log(Object.keys(objeto).length);

}

// exercício 4

const listValues = objeto => {
  // console.log(Object.values(objeto));

}

listValues(lesson2);

// exercício 5

lengthtObject(lesson2);

const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
// console.log(allLessons);

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// exercício 6

const countStudents = objeto =>  {
  
  // console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);
const array = Object.keys(objeto);
let total = 0;
for (index of array){
   total += objeto[index].numeroEstudantes;
}
// console.log(total);

// ou 

// const getNumberOfStudents = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total += obj[array[index]].numeroEstudantes;
//   }
//   return total;
// };
// console.log(getNumberOfStudents(allLessons));

return total;

}
countStudents(allLessons);

// exercício 7

const getValueByNumber = (objeto, position) =>  {
  // const array = Object.values(objeto);  
  // console.log(array[position]);
  // ou
  // console.log(Object.values(objeto)[position]);
}
getValueByNumber(lesson1, 0);

// exercício 8

const verifyPair = (objeto, chave, valor) => {
  if(objeto[chave] === valor) {    
    return true;
  } return false;    
};

// ou 

// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (let index in arr) {
//     if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//   }
//   return isEqual;
// };

console.log(typeof(verifyPair(lesson2,'professor','Carlos')));

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false