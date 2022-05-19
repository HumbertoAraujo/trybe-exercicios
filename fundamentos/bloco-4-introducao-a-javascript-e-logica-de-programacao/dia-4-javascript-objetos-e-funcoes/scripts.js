// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); 
// console.log(conta[infoDoBanco]['nome']); 
// console.log(conta.agencia); 
// console.log(conta['agencia']); 

// console.log(conta.banco.cod); 
// console.log(conta['banco']['id']); 

// let usuario = {
// id: 99,
// email: 'jakeperalta@gmail.com',
// infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//     rua: 'Smith Street',
//     bairro: 'Brooklyn',
//     cidade: 'Nova Iorque',
//     estado: 'Nova Iorque',
//     },
// },
// };

// console.log(usuario['id']); 
// console.log(usuario.email); 

// console.log(usuario.infoPessoal.endereco.rua); 
// console.log(usuario['infoPessoal']['endereco']['cidade']); 

// let moradores = [
// {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
// },
// {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
// },
// {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
// },
// {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
// },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); 
// console.log(moradores[0]['andar']); 
// console.log(primeiroMorador['andar']); 

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); 
// console.log(ultimoMorador.nome); 
// console.log(moradores[moradores.length - 1].nome);
// console.log(moradores[moradores.length - 1]['nome']);
// let player = {
//     name : 'Marta',
//     lastName : 'Silva',
//     age : 34,
//     medals : { 
//         golden: 2, 
//         silver: 3 
//     }, 
//     bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
     
// }
// console.log( "A jogadora " + player.name + "tem " + player.age + " anos de idade.");
// console.log( "A jogadora " + player.name + "foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");
// console.log( "A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata." );

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let position in food) {
//     console.log(position);
//   };
// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for (let person in names){
//       console.log('Olá ' + names[person]);
//   }
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
// for (let key in car){
//     console.log(key, car[key]);
// }
// let nome = 'João';
// console.log('Bom dia, ' + nome);
// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }
// bomDiaTryber('João'); 
// bomDiaTryber('Julia'); 
// bomDiaTryber('Marcelo');

// let estado = 'deslogado';
// function logarDeslogar() {
//   if (estado === 'deslogado') {
//     estado = 'logado';
// } else {
//     estado = 'deslogado';
// }
// }
// console.log(estado);
// logarDeslogar();
// console.log(estado);
// logarDeslogar();
// console.log(estado); 
// // console.log('O usuário está ' + estado); 

// function maiorNum(primeiroNum, segundoNum) {
//     if (primeiroNum > segundoNum) {
//         return primeiroNum + ' é maior que ' + segundoNum;
//     } else if (segundoNum > primeiroNum) {
//         return segundoNum + ' é maior que ' + primeiroNum;
//     } else {
//     return 'Os números são iguais';
//     }
//     }
// console.log(maiorNum(10, 20)); 
// console.log(maiorNum(2, -5)); 
// console.log(maiorNum(1, 1)); 


// let a = "Serei a melhor pessoa dev";
// let b = "Esse é meu jeito dev de ser!";
// let num = 2;
// let strings = [a, b];


// console.log((typeof strings.length) == (typeof num));

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// Exercício 1

// console.log('Bem vinda, ' + info.personagem)

// Exercício 2

// info.recorrente = 'Sim';
// console.log(info);

// Exercício 3

// for (let key in info){
//     console.log(key);
// }

// Exercício 4

// for (let key in info){
//     console.log(info[key]);
// }

// Exercício 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente : 'Sim'
// };
// for (let key in info){
//     if (info[key] === 'Sim' && info2[key] === 'Sim'){
//         console.log('Ambos recorrentes');
//     } else {
//     console.log (info[key] + ' e ' + info2[key]);
//     }    
// }

// Exercício 6

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + "'" + leitor.livrosFavoritos[0].titulo + "'");

 // Exercício 7

//  let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//  leitor.livrosFavoritos.push( {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   });
//   console.log('"' + leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos" + '"');

// verificaPalindrome('arara');

// function verificaPalindrome(palavra) {
//     let aux = [];
//     for (let letra of palavra){
//        aux.push(letra);
//      }
//      let palavraContrario = (aux.reverse().toString().replace(/,/g, ""));
//      if (palavraContrario === palavra){
//        console.log(true);
//      } else {
//       console.log(false);
//      }
// }

verificaPalindrome('arara');

function verificaPalindrome(palavra) {
     palavraContrario = (palavra.split("").reverse().join(""));
     if (palavraContrario === palavra){
       console.log(true);
     } else {
      console.log(false);
     }
}

