import React from "react";

class Album extends React.Component {
  render() {
    // Retorna oque será renderizado
    return (
      <article>
        <section>
          <img src={this.props.album.image} alt={this.props.album.title} />
          <h2>{this.props.album.title}</h2>
          <p>Lançamento: {this.props.album.releaseDate.year}</p>
          <p>Gravadora: {this.props.album.others.recordCompany}</p>
          <p>Formatos: {this.props.album.others.formats}</p>
        </section>
      </article>
    )
  }
}

export default Album;