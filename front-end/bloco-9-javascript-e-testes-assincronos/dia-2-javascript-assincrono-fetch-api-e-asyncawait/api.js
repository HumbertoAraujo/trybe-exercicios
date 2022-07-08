const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCripto = () => {

  fetch(API_URL)
   .then((response) => response.json())
   .then((data) => {
    let olDad = document.getElementById('ol-ranking');
    const arrayRanking = data.data.filter((element) => element.rank < 10);
    arrayRanking.forEach((elementForEach) => {
      let newLi = document.createElement('li');
      newLi.classList.add('list-group-item');
      newLi.innerText = `${elementForEach.rank}º ${elementForEach.name} (${elementForEach.symbol}): ${parseFloat(elementForEach.priceUsd).toFixed(2)}`;
      olDad.appendChild(newLi);
    });
  })
  .catch((error) => console.log('Erro', error));
};

window.onload = () => fetchCripto();