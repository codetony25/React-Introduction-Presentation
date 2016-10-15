/**
 * Include the React Library. Most of the time, when
 * you're creating a component you will almost most
 * of the time import the React library.
 *
 * With this import we also get access to React's
 * Top Level API which can be accessed here:
 * https://facebook.github.io/react/docs/top-level-api.html
 */
import React from 'react';

/**
 * In the past, React and ReactDOM use to be just one library
 * but React decided to seperate these two because both these
 * had seperate responsibilities.
 *
 * ReactDOM provides more DOM-specific API while just React
 * itself will provide more COMPONENT-specific API.
 */
import ReactDOM from 'react-dom';

// Import the component that we want to initially render.
import App from './App';

// Include our initial styles, this works because of webpack.
import './index.css';

/**
 * Initial Render of our React Component.
 *
 * First argument will be the Component we want to
 * render on page load.
 *
 * Second argument is where we want to stick that
 * component in our dom. It will find the HTML node
 * that has the ID of `root`.
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
