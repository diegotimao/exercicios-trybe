import React from "react"

class Greting extends React.Component {
  render () {
    return (
      <div>
        <h2>Funcionario:</h2>
        <h1>{this.props.name} {this.props.lastName}</h1>
      </div>
    )
  }
}

export default Greting;