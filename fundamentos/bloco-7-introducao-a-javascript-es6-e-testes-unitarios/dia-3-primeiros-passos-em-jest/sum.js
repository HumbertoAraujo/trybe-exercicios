const sum = (a , b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(string) {
  let newString = '';
  for (let letter of string){
    switch (letter) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
          newString += '5';
          break;
      default :
      newString += letter;
    }
  }
  return newString;
}
function decode(string) {
  let newString = '';
  for (let letter of string){
    switch (letter) {
      case '1':
        newString += 'a';
        break;
      case '2':
        newString += 'e';
        break;
      case '3':
        newString += 'i';
        break;
      case '4':
        newString += 'o';
        break;
      case '5':
          newString += 'u';
          break;
      default :
      newString += letter;
    }
  }
  return newString;

}

function techList(array, nameReceived) {
  array.sort();
  const empty = 'Vazio!';
  const newArray = [];
  if ((array.length == 0) || (nameReceived.length == 0)){
      return empty;      
  } else {
       for (const tech of array){
          newArray.push({ 
          tech: tech,
          name: nameReceived
          })
      }
      }
  return newArray;
    
}

function hydrate(string) {
  let newString = '';
  let aux = string.replace(/\D/g, '');
  let sum = 0;
  for (index = 0; index < aux.length; index += 1){
    sum += parseInt(aux[index]);
  }
  if (sum == 1) {
    newString = sum + ' ' + 'copo de água'
  } else {
    newString = sum + ' ' + 'copos de água'
  }
  return newString;
}

// ############################################################################################

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const verifyIsValid = (index, detail) => {
  let count = 0;
  for (key in professionalBoard[index]){
    if (key === detail){
      count += 1;
    }
  }
  if (count === 0) {
    throw new Error ("Informação indisponível"); 
  }
}

const searchEmployee = (id, detail) => {
  
  try {
    for (let index = 0; index < professionalBoard.length; index += 1){    
      if (professionalBoard[index].id === id){   
        verifyIsValid(index, detail);
        return professionalBoard[index][detail];             
      }    
    } 
    throw new Error ("ID não identificada")
  }   
  catch (error) {
    return error.message;
  }
}

module.exports = {sum , myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee};