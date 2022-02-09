import React from 'react';
import '../styles/calculator.css';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Display value="0" />
        <ButtonContainer />
      </div>
    );
  }
}

export default Calculator;
