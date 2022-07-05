import React from "react";
import { useHistory } from "react-router-dom";

import "./form.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import Title from "./Title/Title";

class Formulario extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      nome: "",
      url: "",
      contato: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      sobre: "",
      cargo: "",
      vaga: "",
      users: [],
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => {
      return {
        [name]: value,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  
    const { users } = this.state;

    this.setState({
      users: [ ...users, this.state ],
      nome: "",
      url: "",
      contato: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      sobre: "",
      cargo: "",
      vaga: "",
    });
  }

  render() {
    const {
      nome,
      url,
      email,
      contato,
      cpf,
      endereco,
      cidade,
      sobre,
      cargo,
      vaga,
    } = this.state;

    return (
      <form action="" onSubmit={this.handleSubmit} method="POST" className="form">
        <Title description="Seus dados" />
        <section className="user-dados">
          <Input
            value={nome}
            name="nome"
            type="text"
            description="Nome Completo"
            handleChange={this.handleChange}
          />
          <Input
            value={url}
            name="url"
            type="url"
            description="Link da sua foto (comece com //http)"
            handleChange={this.handleChange}
          />
          <Input
            value={contato}
            name="contato"
            type="tel"
            description="Contato (somente números)"
            handleChange={this.handleChange}
          />
          <Input
            value={email}
            name="email"
            type="email"
            description="Email"
            handleChange={this.handleChange}
          />
          <Input
            value={cpf}
            name="cpf"
            type="text"
            description="Cpf"
            handleChange={this.handleChange}
          />
          <Input
            value={endereco}
            name="endereco"
            type="tex"
            description="Endereço"
            handleChange={this.handleChange}
          />
          <Input
            value={cidade}
            name="cidade"
            type="tex"
            description="Cidade"
            handleChange={this.handleChange}
          />
        </section>

        <section className="user-aula">
          <Title description="Sobre você" />
          <div className="inputs-aula">
            <TextArea
              name="sobre"
              value={sobre}
              description="Sobre você"
              handleChange={this.handleChange}
            />
            <Input
              value={cargo}
              name="cargo"
              type="tex"
              description="Cargo"
              handleChange={this.handleChange}
            />
            <TextArea
              name="vaga"
              value={vaga}
              description="Sobre você"
              handleChange={this.handleChange}
            />
          </div>
        </section>

        <button className="btn-save" type="submit">
          Salvar cadastro
        </button>
      </form>
    );
  }
}

export default Formulario;
