import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    console.log("Component React");
  }

  handleClick() {
    console.log("Clicou");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add Click</button>
      </div>
    );
  }
}

export default App;
