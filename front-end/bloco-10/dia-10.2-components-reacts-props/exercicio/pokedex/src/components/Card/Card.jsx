import React from "react";
import PropTypes from 'prop-types';

import './card.css';

class Card extends React.Component {
  render() {

    const { data } = this.props;
    
    return (
      <div className="card">
        <div className="image">
          <img src={data.image} alt="" />
        </div>
        <div className="card-info">
          <h1 className="title">{data.name}</h1>
          <div className="poke-info">
            <strong className="type">{data.type}</strong>
            <strong className="peso">{data.averageWeight.value} {data.averageWeight.measurementUnit}</strong>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
}

export default Card;