/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <caption>
        <input type="text" value={this.props.result} disabled />
      </caption>
    );
  }
}

export default Display;
