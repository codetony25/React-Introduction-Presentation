import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Here's our very first component, we ask it
 * to extend React.Component so that React will
 * know how to render it out, and have their
 * Component API available to us which also
 * includes the Life Cycle Methods.
 *
 * More Info: https://facebook.github.io/react/docs/component-api.html
 */
class App extends React.Component {

  // What we want to happen initially
  constructor() {

    // Set the initial state of this component.
    this.state = {
      isReactCool: true,
      isTonyAwesome: true
    }
  }

  /** [Mounting Life Cycle Methods] **/

  // What do we want to happen BEFORE the component is mounting
  componentWillMount() {
    console.log('componentWillMount');
  }

  // What do we want to do when the component is finally mounted?
  componentDidMount() {
    console.log('componentDidMount');
  }

  /** [Updating Life Cycle Methods] **/


  /**
   * React.Component will know to look for the `render()`
   * method. This is where what we want to tell React to
   * render out.
   */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
