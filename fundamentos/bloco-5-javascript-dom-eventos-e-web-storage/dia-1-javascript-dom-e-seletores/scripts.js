const headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "#3CB371";

const urgentH3 = document.querySelectorAll( '.emergency-tasks h3');
for (let index = 0; index < urgentH3.length; index += 1){
    urgentH3[index].style.backgroundColor = "#836FFF";
}
const urgent = document.getElementsByClassName('emergency-tasks');
urgent[0].style.backgroundColor = "#F08080";

const nourgentH3 = document.querySelectorAll( '.no-emergency-tasks h3');
for (let index = 0; index < nourgentH3.length; index += 1){
    nourgentH3[index].style.backgroundColor = "black";
}
const nourgent = document.getElementsByClassName('no-emergency-tasks');
nourgent[0].style.backgroundColor = "#F4A460";
 const footer = document.getElementById('footer-container');
 footer.style.backgroundColor = "#2F4F4F";

