import React from 'react';
import buttonList from './ButtonList.js';
import CalcButton from './CalcButton.jsx';

export default React.createClass({
  render: function () {
    let buttons = buttonList.map(elem => {
      return (
        <CalcButton display={elem.display} handleClick={this.props.handleClick} key={this.props.keyGen()} />
      )
    });

    return (
      <div>
        <div>{buttons.slice(0,4)}</div>
        <div>{buttons.slice(4,8)}</div>
        <div>{buttons.slice(8,12)}</div>
        <div>{buttons.slice(12,16)}</div>
        <div>{buttons.slice(16,20)}</div>
      </div>
    );
  }
});
