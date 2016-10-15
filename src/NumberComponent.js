import React from 'react';
import NameApp from './NameComponent';

class NumberComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isNumberComponent: true,
      isHeaderVisible: true,
      currentNumber: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('NumberComponent: componentWillRecieveProps', nextProps);
  }

  // Never mutate state directly!
  handleIncrementNumber = () => {
    let number = this.state.currentNumber;
    const incrementedNumber = number += 1;

    this.setState({
      currentNumber: incrementedNumber
    });
  };

  handleDecrementNumber = () => {
    let number = this.state.currentNumber;
    const decrementedNumber = number -= 1;

    this.setState({
      currentNumber: decrementedNumber
    });
  };

  render() {
    const { isReactAwesome, isTonyAwesome } = this.props;

    return (
      <div style={{border: '2px solid gold'}}>
        <p>I am Number App!</p>
        <p>The props passed in: </p>
        <p>Is React Awesome? {isReactAwesome}</p>
        <h1>Current Number: {this.state.currentNumber}</h1>
        <button onClick={this.handleIncrementNumber}>Increment Number</button>
        <button onClick={this.handleDecrementNumber}>Decrement Number</button>
        <NameApp
          isTonyAwesome={isTonyAwesome}
          currentNumber={this.state.currentNumber}
          handleAwesomeClick={this.props.handleAwesomeClick}
        />
      </div>
    )
  }

}

export default NumberComponent;
