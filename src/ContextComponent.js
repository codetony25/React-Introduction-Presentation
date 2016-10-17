import 'whatwg-fetch';
import React from 'react';

class ContextComponent extends React.Component {

  // Grab the context string that we had made in App.js Component
  static contextTypes = {
    myRandomContextString: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = { pokemonData: '' }
  }

  // Example on how to fetch data from an API.
  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/4/')
      .then((response) => {
      return response.json().catch(error => {
        return {};
      });
    })
      .then(data => {
      console.log('data', data);
      this.setState({ pokemonData: data })
    })

    // Refs example
    console.log('refs', this.refs.myContextComponent);
  }

  renderPokemonData = () => {
    if (this.state.pokemonData) {
      return (
        <div>
          <h2>
            The pokemon has arrived:
            <img src={this.state.pokemonData.sprites.front_default} alt="" />
            <span style={{ color: 'red' }}> {this.state.pokemonData.name}</span>
          </h2>
        </div>
      )
    }
    else {
      return (
        <h2>Fetching Pokemon Data. Loading....</h2>
      )
    }
  };

  render() {
    return (
      <div ref="myContextComponent" style={{border: '2px solid green'}}>
        <h1>I am the Context Component!</h1>
        <h3>
          The context I received globally
          is: {this.context.myRandomContextString}
        </h3>
        {this.renderPokemonData()}
      </div>
    )
  }

}

export default ContextComponent;
