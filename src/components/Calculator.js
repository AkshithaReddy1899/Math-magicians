import React from 'react';
import '../styles/calculator.css';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick = (e) => {
    this.setState((prev) => calculate(prev, e.target.innerText));
  }

  render() {
    let result;
    const { total, next } = this.state;
    if (next === null && total === null) {
      result = 0;
    } else if (next === null) {
      result = total;
    } else {
      result = next;
    }
    return (
      <div className="calculator">
        <Display value={result} />
        <div className="button-container">
          <Button text="AC" handleclick={this.handleclick} />
          <Button text="+/-" handleclick={this.handleclick} />
          <Button text="%" handleclick={this.handleclick} />
          <Button text="÷" handleclick={this.handleclick} className="operator" />
          <Button text="7" handleclick={this.handleclick} />
          <Button text="8" handleclick={this.handleclick} />
          <Button text="9" handleclick={this.handleclick} />
          <Button text="x" handleclick={this.handleclick} className="operator" />
          <Button text="4" handleclick={this.handleclick} />
          <Button text="5" handleclick={this.handleclick} />
          <Button text="6" handleclick={this.handleclick} />
          <Button text="-" handleclick={this.handleclick} className="operator" />
          <Button text="1" handleclick={this.handleclick} />
          <Button text="2" handleclick={this.handleclick} />
          <Button text="3" handleclick={this.handleclick} />
          <Button text="+" handleclick={this.handleclick} className="operator" />
          <Button text="0" handleclick={this.handleclick} className="zero" />
          <Button text="." handleclick={this.handleclick} />
          <Button text="=" handleclick={this.handleclick} className="operator" />
        </div>
      </div>
    );
  }
}

export default Calculator;
