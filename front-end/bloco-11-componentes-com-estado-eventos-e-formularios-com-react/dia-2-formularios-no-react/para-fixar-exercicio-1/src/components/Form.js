import React from "react";
import EstadoFavorito from "./EstadoFavorito";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',      
      idade: '',
      vaiComparecer: false,
      palavraChaveFavorita: '',
      erroNoEstadoFavorito: false
    }

  }

  // handleError() {
  //   const { name, email, age, anecdote, terms } = this.state;

  //   const errorCases = [
  //     !name.length,
  //     !email.match(/^\S+@\S+$/i),
  //     !age.length,
  //     !anecdote.length,
  //     !terms,
  //   ];

  //   const formularioPreenchido = errorCases.every((error) => error !== true);

  //   this.setState({
  //     formularioComErros: !formularioPreenchido,
  //   });
  // }



  // handleTextAreaChange = (event) => {  
  //   this.setState({estadoFavorito: event.target.value});
  // }

  // handleEmailChange = (event) => {  
  //   this.setState({email: event.target.value});
  // }

  // handleNameChange = (event) => {  
  //   this.setState({nome: event.target.value});
  // }

  // handleAgeChange = (event) => {  
  //   this.setState({idade: event.target.value});
  // }

   handleChange = ({target}) => {  
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
    this.handleError();
  }

  // handleChange = ({target}) => {  
  //   const {name} = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({[name]: value});
    
  // }

  handleError = () => {
    if(this.state.estadoFavorito.length > 50){
      this.setState({erroNoEstadoFavorito: true });
    }
  }

  render() {
    return (
    <div>
      <h1>Estados e React: Ferramenta Incrível ou Reagindo a regionalismos?</h1>
      <form>
        <fieldset>
          <EstadoFavorito handleChange={this.handleChange} value={this.state.estadoFavorito}/>
          <label>
            Email
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </label>

          <label>
            Nome
            <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
          </label>

          <label>
            Idade
            <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange}/>
          </label>

          <label>
            Vai comparecer à conferência ?
            <input name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange}/>
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
          <label>
            Adicione seu arquivo:
            <input type="file" />
          </label>
        </fieldset>
      </form>
    </div>
    );
  }
}

export default Form;