import React from "react";
import Header from '../../components/Header/Header';
import Formulario from '../../components/Formulario/Formulario';
import Footer from '../../components/Footer/Footer';

class Form extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Formulario />
      <Footer />
      </>
    )
  }
}

export default Form;