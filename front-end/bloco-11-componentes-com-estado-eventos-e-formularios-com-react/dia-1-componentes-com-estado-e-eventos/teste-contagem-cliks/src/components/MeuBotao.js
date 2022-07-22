import React from 'react';

class MeuBotao extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numeroDeCliques: 0,
    }
    // this.handleClick = this.handleClick.bind(this);
  }
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