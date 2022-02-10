import React, { useState } from 'react';
import '../styles/calculator.css';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (text) => {
    const updatedState = calculate(state, text);
    setState(updatedState);
  };

  let result = '0';
  const { next, total, operation } = state;
  if (next !== null) {
    result = next;
  } else if (total !== null) {
    result = total;
  } else if (operation !== null) {
    result = operation;
  }

  return (
    <div className="calculator">
      <Display value={result} />
      <div className="button-container">
        <Button text="AC" handleClick={handleClick} />
        <Button text="+/-" handleClick={handleClick} />
        <Button text="%" handleClick={handleClick} />
        <Button text="÷" handleClick={handleClick} className="operator" />
        <Button text="7" handleClick={handleClick} />
        <Button text="8" handleClick={handleClick} />
        <Button text="9" handleClick={handleClick} />
        <Button text="x" handleClick={handleClick} className="operator" />
        <Button text="4" handleClick={handleClick} />
        <Button text="5" handleClick={handleClick} />
        <Button text="6" handleClick={handleClick} />
        <Button text="-" handleClick={handleClick} className="operator" />
        <Button text="1" handleClick={handleClick} />
        <Button text="2" handleClick={handleClick} />
        <Button text="3" handleClick={handleClick} />
        <Button text="+" handleClick={handleClick} className="operator" />
        <Button text="0" handleClick={handleClick} className="zero" />
        <Button text="." handleClick={handleClick} />
        <Button text="=" handleClick={handleClick} className="operator" />
      </div>
    </div>
  );
};

export default Calculator;
