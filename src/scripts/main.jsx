import React from 'react';
import ReactDOM from 'react-dom';

import Display from './Display.jsx';
import ButtonRows from './ButtonRows.jsx';
import ButtonList from './ButtonList.js';
import TheFunction from './theFunction.js';

const Calculator = React.createClass({
  getInitialState: function() {
    return {currentNumber: "", baseNumber: "", lastAction: "", title: "hELL0"}
  },

  //When button is clicked toss button object
  //and app state to TheFunction (a reducer? Kind of?)
  handleClick: function(event) {
    let state = this.state,
      actionObj = ButtonList.filter(elem => elem.display === event.target.innerHTML)[0],
      newState = TheFunction(state, actionObj);

    //Every option from TheFunction should return a state
    //or state change of some sort
    this.setState(newState);
  },

  //A key generator
  //returns a new number every time it's accessed
  keyGenerator: (function() {
    let key = 0;

    return function() {
      return key++;
    }
  })(),

  render: function() {
    return (
      <div className="empty">
        <Display display={this.state.currentNumber || this.state.baseNumber || this.state.title}/>
        <ButtonRows handleClick={this.handleClick} keyGen={this.keyGenerator}/>
      </div>
    );
  }
});

ReactDOM.render(<Calculator/>, document.getElementById('calculator'));
