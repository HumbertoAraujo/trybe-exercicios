import React from "react";


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayTasks = ['Alimentar dogs', 'Limpar pátio', 'lavar roupa', 'fazer comida', 'estudar'];

class App extends React.Component {
  render() {
    return (
    <ul>
      {arrayTasks.map((element) => Task(element))}
    </ul>
    );
  }
}

export default App;
