import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Display from './display';
import Keypad from './keypad';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => (calculate(state, e.target.innerText)));
  }

  render() {
    const { total, next } = this.state;
    let result = '0';
    result = next || total;

    return (
      <table>
        <Display result={result} />
        <Keypad handleClick={this.handleClick} />
      </table>
    );
  }
}
