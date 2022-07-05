import React from "react";

import './header.css';
import Logo from '../../assets/logo.png';
import Banner from '../../assets/banner.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
         <div className="header-container">
            <div className="nav">
              <img src={Logo} alt="Logo Pokemon" />
              <div className="nav-list">
                <ul>
                  <li className="item">Home</li>
                  <li className="item">Movies</li>
                  <li className="item">Pokédexes</li>
                </ul>
              </div>
            </div>
            <div className="header-info">
              <div className="info">
                <h1>Encontre os seus personagens favoritos</h1>
                
                <div className="search">
                  <input type="text" placeholder="Pesquisar" />
                  <button>Pesquisar</button>
                </div>
              </div>
              <img src={Banner} alt="Banner phot" />
            </div>
         </div>
      </div>
    )
  }
}

export default Header;