import React from "react";

import './footer.css';
import Logo from '../../assets/logo.png';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-info">
          <img src={Logo} alt="Logo icon" />
        </div>
      </footer>
    )
  }
}

export default Footer;