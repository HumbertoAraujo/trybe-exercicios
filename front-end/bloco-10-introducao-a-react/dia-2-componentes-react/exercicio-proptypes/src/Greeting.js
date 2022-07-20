import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {    
    return (<h1>Hello, {this.props.name.name} {this.props.name.lastName} {this.props.idade} </h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.shape({
    name: PropTypes.string,
  lastName: PropTypes.string,
  }) 
};

// Greeting.propTypes = {
//   name: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
// };

Greeting.defaultProps = {
  idade: 'idade não informada'
}

export default Greeting;