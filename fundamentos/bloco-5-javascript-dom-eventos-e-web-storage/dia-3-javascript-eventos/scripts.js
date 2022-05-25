function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
 

  createDaysOfTheWeek();
    
  // Escreva seu código abaixo.
  // Exercício 1
function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const ulPai = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index += 1){
    let newLi = document.createElement('li');
    newLi.classList.add('day');
    newLi.innerText = dezDaysList[index];
    if ((dezDaysList[index] === 4) || (dezDaysList[index] === 11) ||(dezDaysList[index] === 18 || (dezDaysList[index] === 25))) {
      newLi.classList.add('friday');
    }  if ((dezDaysList[index] === 24) || (dezDaysList[index] === 25) ||(dezDaysList[index] === 31)) {
      newLi.classList.add('holiday');
    }
    ulPai.appendChild(newLi);
  }
}
createDays();

  // Exercício 2  
  
  function novoBotaoFeriado(Feriados){
    const paiBotao = document.querySelector('.buttons-container');
    const botaoFeriado = document.createElement('button');
    botaoFeriado.innerText = Feriados;
    botaoFeriado.id = 'btn-holiday';
    paiBotao.appendChild(botaoFeriado);
  }
  novoBotaoFeriado("Feriados");

  // Exercício 3  

  function changeBackgroudColor(){
  let botaoFeriado = document.getElementById('btn-holiday');
  botaoFeriado.addEventListener('click', changeColorHoliday);
  function changeColorHoliday(){
    const holidayDays = document.getElementsByClassName('holiday');
    
    for (index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === 'yellow'){
      holidayDays[index].style.backgroundColor = "rgb(238,238,238)";
      } else {
        holidayDays[index].style.backgroundColor = "yellow"
      }      
    }        
  }
}
changeBackgroudColor();

  // Exercício 4

  function novoBotaoSexta(sextaFeira){
    const paiBotao = document.querySelector('.buttons-container');
    const botaoSexta = document.createElement('button');
    botaoSexta.innerText = sextaFeira;
    botaoSexta.id = 'btn-friday';
    paiBotao.appendChild(botaoSexta);
  }
  novoBotaoSexta("Sexta-feira");

  //  Exercício 5
  
  function changeTextFriday(){
  let botaoSexta = document.getElementById('btn-friday');
  botaoSexta.addEventListener('click', changeColorFriday);
  function changeColorFriday(){
    const fridayDays = document.getElementsByClassName('friday');    
    for (index = 0; index < fridayDays.length; index += 1) {
      const dayNumber = parseInt(fridayDays[index].previousElementSibling.innerText) + 1;
      console.log(dayNumber);
      if (fridayDays[index].style.color === 'blue'){
      fridayDays[index].style.color = "#777";    
      fridayDays[index].innerText = dayNumber;  
      } else {
        fridayDays[index].style.color = "blue"
        fridayDays[index].innerText = 'Sextou';
      }  
    }        
  }
} 
changeTextFriday();

//  Exercício 6


function zoomEfect(){

  let daysNumbers = document.getElementById('days');
  daysNumbers.addEventListener('mouseover', function (event){
    event.target.style.fontSize = '30px';
  })   
}

function OutZoomEfect(){

  let daysNumbers = document.getElementById('days');
  daysNumbers.addEventListener('mouseout', function (event){
    event.target.style.fontSize = '20px';
  })   
}

zoomEfect();
OutZoomEfect();

//  Exercício 7

function newTask(receivedInput){

const paiTasks = document.querySelector(".my-tasks");
let newTask = document.createElement('span');
newTask.innerText = receivedInput;
paiTasks.appendChild(newTask);
newTask.style.display = 'block';
}
newTask("Nova Tarefa");


  
