/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './button';

class Keypad extends React.Component {
  render() {
    const items = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return (
      <div className="showKeypad">
        {items.map((item) => (
          <Button key={item} handleClick={this.props.handleClick} value={item} />
        ))}
      </div>
    );
  }
}

export default Keypad;
