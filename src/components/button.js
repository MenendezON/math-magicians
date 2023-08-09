/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.value);
  }

  render() {
    return (
      <button type="button" value={this.props.value} onClick={this.props.handleClick}>
        {this.props.value}
      </button>
    );
  }
}
