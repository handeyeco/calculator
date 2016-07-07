import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.display}
      </button>
    )
  }
});
