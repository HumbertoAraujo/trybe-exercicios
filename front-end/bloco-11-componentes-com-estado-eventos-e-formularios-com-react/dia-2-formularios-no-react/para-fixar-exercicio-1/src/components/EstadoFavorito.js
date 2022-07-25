import React from "react";


class EstadoFavorito extends React.Component {
  render () {
    const { value, handleChange} = this.props;
    let error = undefined;
    if (value.length > 120) error = "Texto muito grande deve ter até 120 caracteres";
    const verify = () => {
      if(error !== undefined) {       
        // window.alert(error);
        return error;
      }; return '';
    }
    return (
      <label>
        Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
        <textarea name="estadoFavorito" value={value} onChange={handleChange}/>
        <span>{
        // error ? error : ''
        verify()     
        }</span>
      </label>
    )
  }
}

export default EstadoFavorito;