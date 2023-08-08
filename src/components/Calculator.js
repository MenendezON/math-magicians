import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Button = ({ name }) => <td>{name}</td>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

function Calculator() {
  return (
    <table>
      <caption>
        <input type="text" value="0" disabled />
      </caption>
      <tr>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="/" />
      </tr>
      <tr>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="x" />
      </tr>
      <tr>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </tr>
      <tr>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </tr>
      <tr>
        <td colSpan="2">0</td>
        <Button name="." />
        <Button name="=" />
      </tr>
    </table>
  );
}

export default Calculator;
