import React from 'react';
import StateLessComponent from './StateLessComponent';
import ContextComponent from './ContextComponent';

class NameComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isNameComponent: true,
      currentName: 'Tony'
    }
  }

  handleNameChange = (event) => {
    this.setState({
      currentName: event.target.value
    });
  };

  render() {
    const { currentNumber } = this.props;

    return (
      <div>
        <p>I am Name App!</p>
        <p>The props passed in: </p>
        <p>What is our current number? {currentNumber}</p>
        <h1>Current Name: {this.state.currentName}</h1>
        <input
          type="text"
          defaultValue={this.state.currentName}
          onChange={this.handleNameChange}
        />
        <h1>Is Tony Awesome?</h1>
        {(() => {
          if (this.props.isTonyAwesome) {
            return <h3>Tony is awesome!</h3>;
          }
          else {
            return <h3>Tony is NOT awesome!</h3>;
          }
        })()}
        <button onClick={this.props.handleAwesomeClick}>Toggle Awesome Tony</button>
        <StateLessComponent statelessName={this.state.currentName} />
        <ContextComponent />
      </div>
    )
  }

}

export default NameComponent;
