import '../styles/calculator.css';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default Calculator;
