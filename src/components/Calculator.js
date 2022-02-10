import React from 'react';
import '../styles/calculator.css';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (text) => {
    const updatedState = calculate(this.state, text);
    this.setState(updatedState);
  }

  render() {
    let result = '0';
    const { next, total, operation } = this.state;
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
          <Button text="AC" handleClick={this.handleClick} />
          <Button text="+/-" handleClick={this.handleClick} />
          <Button text="%" handleClick={this.handleClick} />
          <Button text="÷" handleClick={this.handleClick} className="operator" />
          <Button text="7" handleClick={this.handleClick} />
          <Button text="8" handleClick={this.handleClick} />
          <Button text="9" handleClick={this.handleClick} />
          <Button text="x" handleClick={this.handleClick} className="operator" />
          <Button text="4" handleClick={this.handleClick} />
          <Button text="5" handleClick={this.handleClick} />
          <Button text="6" handleClick={this.handleClick} />
          <Button text="-" handleClick={this.handleClick} className="operator" />
          <Button text="1" handleClick={this.handleClick} />
          <Button text="2" handleClick={this.handleClick} />
          <Button text="3" handleClick={this.handleClick} />
          <Button text="+" handleClick={this.handleClick} className="operator" />
          <Button text="0" handleClick={this.handleClick} className="zero" />
          <Button text="." handleClick={this.handleClick} />
          <Button text="=" handleClick={this.handleClick} className="operator" />
        </div>
      </div>
    );
  }
}

export default Calculator;
