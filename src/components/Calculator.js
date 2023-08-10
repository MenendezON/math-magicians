import React, { useState } from 'react';
import Keys from './button';
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
  );
};

export default Calculator;
