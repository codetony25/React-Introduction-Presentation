import React from 'react';

const StateLessComponent = (props) => {
  return (
    <div style={{border: '2px solid pink'}}>
      <h1>I am a stateless Component. {props.statelessName}</h1>
    </div>
  )
};

export default StateLessComponent;
