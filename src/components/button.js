import React from 'react';
import PropTypes from 'prop-types';

const Keys = ({ click }) => {
  const keys = [
    'AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];

  return (
    <div className="showKeypad">
      {keys.map((key) => (
        <button
          key={key}
          type="button"
          value={key}
          onClick={() => click(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

Keys.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Keys;
