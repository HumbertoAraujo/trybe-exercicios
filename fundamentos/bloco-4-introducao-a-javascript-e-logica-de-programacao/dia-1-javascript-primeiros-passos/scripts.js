// // Exercício 1

// const a = 350;
// const b = 7;

// console.log( a + b);
// console.log( a - b);
// console.log( a * b);
// console.log( a / b);
// console.log( a % b);

// // Exercício 2

// const a = 5;
// const b = 7;
// if(a>b){
//     console.log(a);
// }else {
//     console.log(b);
// }

// // Exercício 3
// const a = 15;
// const b = 27;
// const c = 10;
// if (a > b && a > c){
//     console.log(a);
// }else if (b > a && b > c){
//     console.log(b);
// }else {
//     console.log(c);
// }
// // Exercício 4
// const a = 0;
// if ( a > 0 ){
//     console.log("positive");
// }else if ( a < 0 ){
//     console.log("negative");
// }else {
//     console.log("zero");
// }
// // Exercício 5
// const a = 60;
// const b = 1000;
// const c = 60;

// if ((a + b + c) < 0 || (a + b + c) > 360 ){
//     console.log("Valores inseridos estão incorretos, informar valores válidos");
// } else if ((a + b + c) == 180){
//     console.log("Sim as somas dos 3 ângulos formam um triângulo!");
// } else {
//     console.log("Não as somas dos 3 ângulos Não formam um triângulo!");
// }
// // Exercício 6
// let peca = prompt('Digite o nome de uma peça de xadrez').toLowerCase();
// switch(peca){
//     case "peão":
//         alert("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
//         break
//     case "cavalo":
//         alert("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.")
//         break
//     case "torre":
//         alert("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
//         break
//     case "bispo":
//         alert("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
//         break
//     case "rainha":
//         alert("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
//         break
//     case "rei":
//         alert("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
//         break
//     default:
//         alert("ERRO! Digitar corretamente o nome da peça.")
// }
// // Exercício 7

// let nota = 80;

// if( (nota < 0) || (nota > 100)) {
//     console.log("Valor Inválido! Preencher percentual de acerto corretamente!");    
// } else if (nota >= 90) {
//     nota = "A";
// } else if (nota >= 80) {
//     nota = "B";
// } else if (nota >= 70) {
//     nota = "C";
// } else if (nota >= 60) {
//     nota = "D";
// } else if (nota >= 50) {
//     nota = "E";
// } else if (nota < 50) {
//     nota = "F";
// } 
// if ((typeof nota) == "string" ){
//  console.log("A nota convertida é:", nota);
// }
// // Exercício 8
// const a = 15;
// const b = 15;
// const c = 18;
// if ((a % 2 == 0) || (b % 2 == 0) ||(c % 2 == 0) ) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// // Exercício 9
// const a = 16;
// const b = 16;
// const c = 3;
// if ((a % 2 != 0) || (b % 2 != 0) ||(c % 2 != 0) ) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// // Exercício 10
// const valorCusto = 100;
// const valorVenda = 200;
// const impostoSobreOCusto = 0.2; //20%
// let valorCustoTotal = valorCusto + (valorCusto * impostoSobreOCusto);
// let quantidadeTotalVendasDeProdutos = 1000;
// let lucroUnitario = valorVenda - valorCustoTotal;
// let lucro = quantidadeTotalVendasDeProdutos * lucroUnitario;
// if (valorCusto < 0 || valorVenda < 0) {
//     console.log("Erro, não é possível lançar valor de venda, ou valor de custo menor que R$0,00")
// } else {
//     console.log(" O valor de lucro total vendendo a quantidade de", quantidadeTotalVendasDeProdutos, "unidades é R$", lucro);
// }
// // Exercício 11
const salarioBruto = 3000
let salarioDeduzidoInss;
let descontoIrpf;
let salarioLiquido;

if(salarioBruto > 5189.82){
    salarioDeduzidoInss = salarioBruto - 570.88;
}else if (salarioBruto > 2594.93){
    salarioDeduzidoInss = salarioBruto - ( salarioBruto * 0.11 );    
}else if (salarioBruto > 1556.95){
    salarioDeduzidoInss = salarioBruto - ( salarioBruto * 0.09 );
} else {
    salarioDeduzidoInss = salarioBruto - ( salarioBruto * 0.08 );
}

if(salarioDeduzidoInss > 4664.68) {
    descontoIrpf = (salarioDeduzidoInss*0.275) - 869.36;
    salarioLiquido = salarioDeduzidoInss - descontoIrpf;
} else if (salarioDeduzidoInss > 3751.06) {
    descontoIrpf = (salarioDeduzidoInss*0.225) - 636.13;
    salarioLiquido = salarioDeduzidoInss - descontoIrpf;
}else if (salarioDeduzidoInss > 2826.66) {
    descontoIrpf = (salarioDeduzidoInss*0.15) - 354.80;
    salarioLiquido = salarioDeduzidoInss - descontoIrpf;
}else if (salarioDeduzidoInss > 1903.99) {
    descontoIrpf = (salarioDeduzidoInss*0.075) - 142.80;
    salarioLiquido = salarioDeduzidoInss - descontoIrpf;
}else {
    salarioLiquido = salarioDeduzidoInss;
}
console.log("O Salário líquido é", salarioLiquido);



