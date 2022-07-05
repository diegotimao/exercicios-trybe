import React from 'react';

import './joke.css';

class Joke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    const stateAnterior = this.state.storedJokes;
    const joke = this.state.jokeObj;
    this.setState(() => ({
      storedJokes: [...stateAnterior, joke],
    }))
    this.fetchJoke();
  }

  render() {
    const { storedJokes, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div className=''>

        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
        {jokeObj === undefined && (
          <div className="loading">

          </div>
        )}
        {jokeObj !== undefined && (
          <p key={jokeObj.id}>{jokeObj.joke}</p>
        )}
        
        <button onClick={() => this.saveJoke()}>Salvar piada</button>
        
      
      </div>
    );
  }
}

export default Joke;