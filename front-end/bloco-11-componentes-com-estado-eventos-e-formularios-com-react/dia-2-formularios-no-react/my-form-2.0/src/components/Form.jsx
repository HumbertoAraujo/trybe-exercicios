import React, { Component } from 'react'
class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',      
      email: '',      
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
      buttonSubmitIsDisable: true,
      buttonCleanupIsDisable: true,
    }
  }
  handleChange = async ({target}) => {  
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if(name === 'nome') {   
      await this.setState({[name]: value.toUpperCase()});
      console.log(this.state.nome);
    }
    this.setState({[name]: value});
    // this.handleError();
    // console.log(typeof name);
  }

  render() {

    return (
      <form name='form'>
        <fieldset>
        <h1>Cadastro de Currículo</h1>
          <div className="container-labels">
            <label className="label-form">
              Nome              
              <input onChange={this.handleChange} className="inputs" type="text" name='nome' id='nome' placeholder='Nome' maxLength="40" value={this.state.nome}/>
            </label>
            <label className="label-form">
              E-mail
              <input className="inputs" type="email" name="email" id="email" placeholder='E-mail' maxLength="50"/>
            </label>
          </div>
          <div className="container-labels">    
            <label className="label-form">
              CPF
              <input className="inputs" type="text" name="cpf" id="cpf" placeholder='CPF' maxLength="11"/>
            </label>
            <label className="label-form">
              Endereço
              <input className="inputs" type="text" name="endereco" id="endereco" placeholder="Endereço" maxLength="2000"/>
            </label>
          </div>
          <div className="container-labels">
            <label className="label-form">
              Cidade
              <input className="inputs" type="text" name="cidade" id="cidade" maxLength="28" placeholder="Cidade"/>
            </label>
            <label className="label-form">
              Estado
              <select name="Estado" id="Estado">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </label>  
          </div>        
          <label className='container-radios'>         
            Casa
            <input type="radio" name="tipo" id="tipo"/>            
            Apartamento
            <input type="radio" name="tipo" id="tipo"/>
          </label>
        </fieldset>
        <fieldset>     
        <h2>Último Emprego</h2>     
          <label className="label-form">            
            Resumo do Currículo
            <textarea name="curriculo" id="curriculo" cols="30" rows="10" maxLength="1000" placeholder="Resumo do Currículo"></textarea>
          </label> 
          <label className="label-form">            
            Cargo
            <textarea name="cargo" id="cargo"  maxLength="40" placeholder="Cargo"></textarea>
          </label>          
          <label className="descricaoCargo">
            Descrição do Cargo
            <input className="inputs" type="text" name="descricaoCargo" id="descricaoCargo" placeholder="Descrição do Cargo"/>
          </label>
        </fieldset>
        <br />
        <div className="container-buttons">
          <button name="botaoEnviar" id="botaoEnviar" disabled={this.state.buttonSubmitIsDisable}>Enviar</button>  
          <button name="botaoLimpar" id="botaoLimpar" disabled={this.state.buttonCleanupIsDisable}>Limpar</button>
        </div>      
      </form>
    )
  }
}

export default Form;
