// 1
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// 2
const pai =  elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';
// 3
const primeiroFilhodoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhodoFilho.innerText = 'Texto de Teste';

// 4
console.log(pai.firstElementChild);

// 5
console.log(elementoOndeVoceEsta.previousElementSibling);

// 6
const textAttention = elementoOndeVoceEsta.nextSibling
console.log(textAttention)

// 7
console.log(elementoOndeVoceEsta.nextElementSibling );

// 8
console.log(pai.lastElementChild.previousElementSibling);