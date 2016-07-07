import React from 'react';
import ReactDOM from 'react-dom';

import Display from './Display.jsx';
import ButtonRows from './ButtonRows.jsx';
import ButtonList from './ButtonList.js';
import TheFunction from './theFunction.js';

const Calculator = React.createClass({
  getInitialState: function() {
    return {currentNumber: "", baseNumber: "", lastAction: ""}
  },

  handleClick: function(event) {
    let state = this.state,
      actionObj = ButtonList.filter(elem => elem.display === event.target.innerHTML)[0],
      newState = TheFunction(state, actionObj);

    this.setState(newState);
  },

  keyGenerator: (function() {
    let key = 0;

    return function() {
      return key++;
    }
  })(),

  render: function() {
    return (
      <div>
        <Display display={this.state.currentNumber || this.state.baseNumber}/>
        <ButtonRows handleClick={this.handleClick} keyGen={this.keyGenerator}/>
      </div>
    )
  }
});

ReactDOM.render(<Calculator/>, document.getElementById('calculator'));
