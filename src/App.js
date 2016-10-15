import React from 'react';
import NumberApp from './NumberComponent';
import logo from './logo.svg';
import './App.css';

/**
 * Here's our very first component, we ask it
 * to extend React.Component so that React will
 * know how to render it out, and have their
 * Component API available to us which also
 * includes the Life Cycle Methods.
 *
 * https://facebook.github.io/react/docs/component-api.html
 */
class App extends React.Component {

  static childContextTypes = {
    myRandomContextString: React.PropTypes.string
  };

  // Grab the child context so that we can use in any component
  getChildContext() {
    return {
      myRandomContextString: 'I am Context hear me Roar!!!'
    }
  }

  // What we want to happen initially
  constructor() {
    super();

    // Set the initial state of this component.
    this.state = {
      isReactCool: 'YESS!!!',
      isTonyAwesome: true
    }
  }

  /******* [Mounting Life Cycle Methods] *******/

  // What do we want to happen BEFORE the component is mounting
  componentWillMount() {
    console.log('componentWillMount');
  }

  // What do we want to do when the component is finally mounted?
  componentDidMount() {
    console.log('componentDidMount');
  }

  /******* [Updating Life Cycle Methods] *******/

  /**
   * Will the component receive props? What do we want to do with
   * them when the component is rendered or updates?
   */
  componentWillReceiveProps(nextProps) {
    console.log('componentWillRecieveProps');
  }

  /**
   * Do we want the component to re-render? We use nextProps
   * or nextState to determine if we want to cause a re-render
   * or not.
   *
   * We use this life cycle method to avoid un-necessary re-renders
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextProps.isReactCool !== this.state.isReactCool;
  }

  /**
   * Invoked immediately before rendering when new props
   * or state are being received. This method is not
   * called for the initial render.
   *
   * Use this as an opportunity to perform preparation
   * before an update occurs.
   */
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  /**
   * Invoked immediately after the component's updates
   * are flushed to the DOM. This method is not called
   * for the initial render.
   *
   * Use this as an opportunity to operate on the DOM
   * when the component has been updated.
   */
  componentDidUpdate(nextProps, nextState) {
    console.log('componentDidUpdate');
  }

  /******* [Unmounting Life Cycle Methods] *******/

  /**
   * What do we want have happen when the component
   * is unmounting?
   *
   * We can use this as an oppurtunity to any clean-up.
   * For example, if we want to remove any event listeners
   * this is the perfect place to do it.
   */
  componentWillUnmount() {
   console.log('componentWillUnmount');
  }

  handleAwesomeClick = () => {
    this.setState({
      isTonyAwesome: !this.state.isTonyAwesome
    })
  };

  /**
   * React.Component will know to look for the `render()`
   * method. This is where what we want to tell React to
   * render out.
   */
  render() {
    return (
      <div className="App" style={{border: '2px solid blue'}}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Here's another Component:
        </p>
        <NumberApp
          isTonyAwesome={this.state.isTonyAwesome}
          handleAwesomeClick={this.handleAwesomeClick}
          isReactAwesome={this.state.isReactCool}
        />
      </div>
    );
  }
}

export default App;
