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

  // Exercício 2
   let  Feriados = 'Feriados';
  // function receivHoliday(Feriados){
    let paiBotao = document.querySelector('.buttons-container');
    let botaoFeriado = document.createElement('button');
    botaoFeriado.innerText = Feriados;
    botaoFeriado.id = 'btn-holiday';
    paiBotao.appendChild(botaoFeriado);

  // }

  // Exercício 3

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

  //  console.log(holidayDays);