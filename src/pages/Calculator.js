import React, { useState } from 'react';
import Keys from '../components/button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [showInput, setShowInput] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (key) => {
    const calc = calculate(showInput, key);
    setShowInput(calc);
  };
  return (
    <div className="app">
      <div className="side-left">
        &nbsp;
      </div>
      <div className="side-right">
        <h2>Simple Calculator</h2>
        <table>
          <caption>
            <p className="input">
              {showInput.total}
              {' '}
              {showInput.operation}
              {' '}
              {showInput.next}
            </p>
          </caption>
          <Keys click={handleClick} />
        </table>
      </div>
    </div>
  );
};

export default Calculator;
