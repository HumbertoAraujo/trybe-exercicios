import React from 'react';

class MeuBotao extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super(props)
    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
    this.state = {
      numeroDeCliques: 0,
    }
    // A função abaixo vincula "manualmente" o `this` à nossa função
    // this.handleClick = this.handleClick.bind(this);
  }

    // handleClick() {
    //   /* Passando uma callback à função setState, que recebe de parâmetros
    //   o estado anterior e as props do componente, você garante que as atualizações
    //   do estado acontecerão uma depois da outra! */
    //   this.setState((estadoAnterior, _props) => ({
    //     numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    //   }))
    // }

      // handleClick() {

  handleClick = () => {
    this.setState(()=> ({
      numeroDeCliques: this.state.numeroDeCliques +1,
    }))
    console.log(this.state.numeroDeCliques);
  }

  // render() {
  //   return <button onClick={()=>(this.setState(()=> ({
  //     numeroDeCliques: this.state.numeroDeCliques +1,
  //   })))}>{this.state.numeroDeCliques}</button>;
  // }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>;
  }

}

export default MeuBotao;