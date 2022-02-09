import Button from './Button';

function ButtonContainer() {
  return (
    <div className="button-container">
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
      <Button text="=" className="operator" />
    </div>
  );
}

export default ButtonContainer;
