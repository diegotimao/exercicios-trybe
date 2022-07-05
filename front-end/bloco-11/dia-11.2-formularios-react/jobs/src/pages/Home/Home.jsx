import React from "react";
import { Link } from 'react-router-dom';

import './home.css';
import Banner from '../../assets/banner.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          
          <div className="home-info">
            <div className="info-home">
              <img src={Banner} alt="LogoIcon" />
              <h1>Nós somos a Info-jobs</h1>
              <h2>Sua melhor platarforma de empregos online, cadastre seu curriculo e tenha acesso as melhores oportunidades</h2>
            </div>
          </div>
          
          <div className="home-image">
            <div className="btns">
                <Link id="teatch" to='/form'>Cadastrar</Link>
                <Link id="student" to='/profs'>Vagas</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;