// Exercício 1
// const number = 10;
// let result = 0;
// let aux = 0;
// for (let index = number; index >= 1; index -= 1){
//     if (index - 1 != 0){
//         if (index == number){
//             aux += index * (index -1); 
//         } else {
//             result = aux * (index -1)
//             aux = result;
//         }
// }
// }
// console.log(result);
// Exercício 2
// let word = 'banana';
// let aux = '';
// for (let index = (word.length -1); index >= 0; index -= 1){
//     aux += word[index];
// }
// word = aux;
// console.log(word);
// Exercício 3:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = '';
// for (let palavra of array){
//     if (palavra.length > maiorPalavra.length) {
//         maiorPalavra = palavra
//     }
// }
// console.log(maiorPalavra);
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menorPalavra = array[0];
// for (let palavra of array){
//     if (palavra.length < menorPalavra.length) {
//         menorPalavra = palavra
//     }
// }
// console.log(menorPalavra);
const number = 50;
let count = 0;
for (let index = number; index >= 2; index -= 1){
    for (let index2 = 1; index2 <= index; index2 += 1){
        if (index % index2 === 0){
            count += 1;
        }        
    }
    if(count == 2) {
        console.log("O Maior número primo de 0 até 50 é: ", index);
        break
    }
    count = 0;
} 