import React from "react"
import './footer.css';

import Logo from '../../assets/logo.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
          <div className="footer-info">
            <img src={Logo} alt="Logo pokemon" />
            <h1>Feito e atualizado pro Diego Cavalcanti</h1>
          </div>
      </footer>
    )
  }
}

export default Footer;