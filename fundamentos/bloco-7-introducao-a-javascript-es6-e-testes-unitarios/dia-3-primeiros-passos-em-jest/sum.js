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




module.exports = {sum , myRemove, myFizzBuzz, encode, decode};