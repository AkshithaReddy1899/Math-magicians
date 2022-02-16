import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

function Main() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default Main;
