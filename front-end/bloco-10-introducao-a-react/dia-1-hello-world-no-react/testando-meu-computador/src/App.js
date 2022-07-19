import logo from './logo.svg';
import './App.css';

function App() {
  const a = 1;
  const b = 7;

  return (    
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>"Hello Word"</a>
        <img className="App-logo image-test" src="https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg.webp" />        
      </header>
      <div>Texto <br></br> <strong>{a+b}</strong> <hr></hr>
      </div>
    </div>
  );
}

export default App;
