import React, { PureComponent } from 'react';
import './styles/App.css';
import Calculator from './components/Calculator';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
