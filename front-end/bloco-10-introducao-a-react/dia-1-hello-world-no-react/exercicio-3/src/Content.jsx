import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  
  render() {
    return (
    <div className='content-list'>
      {conteudos.map((e, index) => {
        return (
        <div key={index} className='content-item'>
          <h4>{`O conteúdo é: ${e.conteudo}`}</h4>
          <p>{`Status: ${e.status}`}</p>
          <p>{`Bloco: ${e.bloco}`}</p>          
        </div>
        )
      })}
    </div>
    )
  }
}

export default Content;