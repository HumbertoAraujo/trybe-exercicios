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
// const number = 50;
// let count = 0;
// for (let index = number; index >= 2; index -= 1){
//     for (let index2 = 1; index2 <= index; index2 += 1){
//         if (index % index2 === 0){
//             count += 1;
//         }        
//     }
//     if(count == 2) {
//         console.log("O Maior número primo de 0 até 50 é: ", index);
//         break
//     }
//     count = 0;
// } 
// Bônus
// Exercício 1
// let n = 5;
// let aux = '';
// for (let index = 0; index < n; index += 1){
//     for (let index2 = 0; index2 < n; index2 += 1){
//         aux += "*"
//     }
//     console.log(aux);
//     aux = '';
// }
// Exercício 2
// const n = 5;
// let aux = '';
// for (let index = 0; index < n; index += 1){
//     for (let index2 = 0; index2 <= index; index2 += 1){
//         aux += "*"
//     }
//     console.log(aux);
//     aux = '';
// }
// Exercício 3
// const n = 5;
// let aux = '';
// let aux2 = n;
// for (let index = 0; index < n; index += 1){
//     for (let index2 = 0; index2 <= n; index2 += 1){
//         if(index2 < aux2){
//             aux += ' '; 
//         }else {
//         aux += "*";
//         }
//     }
//     console.log(aux);
//     aux = '';
//     aux2 -= 1;
// }

// Exercício 3
