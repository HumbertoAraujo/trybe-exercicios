const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCripto = () => {

  fetch(API_URL)
   .then((response) => response.json())
   .then((data) => {
    document.getElementById('um').innerText = `${data.data[0].name} (${data.data[0].symbol}): ${parseFloat(data.data[0].priceUsd).toFixed(2)}`;
    document.getElementById('dois').innerText = `${data.data[1].name} (${data.data[1].symbol}): ${parseFloat(data.data[1].priceUsd).toFixed(2)}`;
    document.getElementById('tres').innerText = `${data.data[2].name} (${data.data[2].symbol}): ${parseFloat(data.data[2].priceUsd).toFixed(2)}`;
    document.getElementById('quatro').innerText = `${data.data[3].name} (${data.data[3].symbol}): ${parseFloat(data.data[3].priceUsd).toFixed(2)}`;
    document.getElementById('cinco').innerText = `${data.data[4].name} (${data.data[4].symbol}): ${parseFloat(data.data[4].priceUsd).toFixed(2)}`;
    document.getElementById('seis').innerText = `${data.data[5].name} (${data.data[5].symbol}): ${parseFloat(data.data[5].priceUsd).toFixed(2)}`;
    document.getElementById('sete').innerText = `${data.data[6].name} (${data.data[6].symbol}): ${parseFloat(data.data[6].priceUsd).toFixed(2)}`;
    document.getElementById('oito').innerText = `${data.data[7].name} (${data.data[7].symbol}): ${parseFloat(data.data[7].priceUsd).toFixed(2)}`;
    document.getElementById('nove').innerText = `${data.data[8].name} (${data.data[8].symbol}): ${parseFloat(data.data[8].priceUsd).toFixed(2)}`;
    document.getElementById('dez').innerText = `${data.data[9].name} (${data.data[9].symbol}): ${parseFloat(data.data[9].priceUsd).toFixed(2)}`;
  })
  .catch((error) => console.log('Erro', error));
};

window.onload = () => fetchCripto();