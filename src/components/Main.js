import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import styles from '../styles/App.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default Main;
