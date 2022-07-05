import React from "react";
import Card from '../Card/Card';

import api from '../../services/data';

import './main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-content">
          <div className="main-header">
            <h1>Pokedex</h1>
          </div>
          <div className="cards">
            {api.map((item) => (
              <Card  key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;