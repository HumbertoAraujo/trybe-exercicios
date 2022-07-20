import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    const teste = {
      name: 'Humberto de Oliveira',
      lastName: 'Araújo',
    };

    return (<Greeting name={teste}/>);
  }
}

export default App;
