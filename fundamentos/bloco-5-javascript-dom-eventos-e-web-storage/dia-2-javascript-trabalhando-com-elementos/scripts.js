// // // 1
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// // 2
// let pai =  elementoOndeVoceEsta.parentElement;
// pai.style.color = 'red';
// // // 3
// const primeiroFilhodoFilho = elementoOndeVoceEsta.firstElementChild;
// primeiroFilhodoFilho.innerText = 'Texto de Teste';

// // // 4
// // console.log(pai.firstElementChild);

// // // 5
// // console.log(elementoOndeVoceEsta.previousElementSibling);

// // // 6
// const textAttention = elementoOndeVoceEsta.nextSibling
// // console.log(textAttention)

// // // 7
// // console.log(elementoOndeVoceEsta.nextElementSibling );

// // // 8
// // console.log(pai.lastElementChild.previousElementSibling);

// // PARTE 2 1

// let newBrother = document.createElement('section');

// newBrother.id = 'novo-irmao'
// pai.appendChild(newBrother);
// // console.log(newBrother);

// // PARTE 2 2

// let newSon = document.createElement('section');
// newSon.id = 'novo-filho'
// pai.appendChild(newSon);
// // console.log(newSon);

// // PARTE 2 3

// let newSonofSon = document.createElement('section');
// newSonofSon.id = 'novo-filho-do-primeiro-filho-do-filho'
// primeiroFilhodoFilho.appendChild(newSonofSon);
// // console.log(newSonofSon);

// // console.log(newSonofSon.parentElement.parentElement.nextElementSibling);

// let newPai =  document.getElementById('pai');

// let todosOsFilhos = newPai.childNodes;

// for (let index = todosOsFilhos.length -1; index >= 0; index -= 1){


//     let delFilho = todosOsFilhos[index];
//     if (delFilho.id !== 'elementoOndeVoceEsta'){
//     delFilho.remove();

//     }

// }
// console.log(document.body);

// let delSegundoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// delSegundoFilho.remove();
