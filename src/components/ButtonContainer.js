import React, { PureComponent } from 'react';

class ButtonContainer extends PureComponent {
  render() {
    return (
      <div className="button-container">
        <button type="button" className="btn">AC</button>
        <button type="button" className="btn">+/-</button>
        <button type="button" className="btn">%</button>
        <button type="button" className="operator">+</button>
        <button type="button" className="btn">7</button>
        <button type="button" className="btn">8</button>
        <button type="button" className="btn">9</button>
        <button type="button" className="operator">-</button>
        <button type="button" className="btn">4</button>
        <button type="button" className="btn">5</button>
        <button type="button" className="btn">6</button>
        <button type="button" className="operator">*</button>
        <button type="button" className="btn">3</button>
        <button type="button" className="btn">2</button>
        <button type="button" className="btn">1</button>
        <button type="button" className="operator">/</button>
        <button type="button" className="zero">0</button>
        <button type="button" className="btn">.</button>
        <button type="button" className="operator">=</button>
      </div>
    );
  }
}

export default ButtonContainer;

/*

        <Button text="AC" />
        <Button text="+/-" />
        <Button text="%" />
        <Button text="+" className="operator" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="X" className="operator" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" className="operator" />
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" className="operator" />
        <Button text="0" className="zero" />
        <Button text="." />
        <Button text="=" className="operator" /> */
