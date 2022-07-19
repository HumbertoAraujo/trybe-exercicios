// import React from "react";

// const textJSX = "Hello, JSX";
// const ElementH1 = <h1>{textJSX}</h1>;

// export default function App() {
//   return (
//     <div className="App">{ElementH1}</div>
//   )
// }

import React from 'react';
import About from './About';

class App extends React.Component {
  render() {
    const teste = <p>teste testado</p>;
    return (
      <main>
    <About/>
    <h1>{teste}</h1>
    </main>
    );
  }
}

export default App;
