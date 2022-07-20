import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, image, averageWeight } = pokemon;
    return (
      <section className="pokemon-card">
        <div>          
          <p>{name}</p>
          <p>{type}</p>
          <p>{`averageWeight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={name} />
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;