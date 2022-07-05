import React from "react";

import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
         <div className="header-content">
            <div className="info">
              <h1>Que incrível ter você aqui.</h1>
              <h2>O primeiro passo, é preencher esse formulário de inscrição.</h2>
            </div>
         </div>
      </header>
    )
  }
}

export default Header;