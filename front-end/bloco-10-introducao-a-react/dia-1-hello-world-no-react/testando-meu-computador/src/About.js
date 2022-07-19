import React from "react";

class About extends React.Component {
  render() {
    const skills = ["HTML", "JSX", "React"]; 
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);
    return (
    <div>
      <h1>Humberto de Oliveira Araújo</h1>
      <p>Sou o Humberto blablablá blablablá blablablá blablablá.</p>
      <h2>Minhas Habilidades</h2>
      <ul>
      {jsxSkills}      
      </ul>
    </div>
    );
  }  
}
export default About;