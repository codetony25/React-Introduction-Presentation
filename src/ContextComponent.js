import 'whatwg-fetch';
import React from 'react';

class ContextComponent extends React.Component {

  static contextTypes = {
    myRandomContextString: React.PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      isContextComponent: true,
      pokemonName: ''
    };
  }

  componentWillMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/2/').then((response) => {
      console.log('RESPONSE', response);
      // console.log('Response!', response);
      // this.setState({
      //   pokemonName: response
      // })
    });
  }

  render() {
    // if (this.state.pokemonName) {
    //
    // }
    return (
      <div>
        <h1>I am the Context Component!</h1>
        <h3>The context I received globally is:</h3>
        <h2>{this.context.myRandomContextString}</h2>
      </div>
    )
  }

}

export default ContextComponent;
