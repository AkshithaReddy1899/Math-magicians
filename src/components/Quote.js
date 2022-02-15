import React from 'react';
import style from '../styles/App.module.css';

function Quote() {
  return (
    <div className={style.quote}>
      <p>
        <span>
          Numbers have life; they are not just symbols on paper
        </span>
      </p>
      <b>__Shakuntala Devi.</b>
    </div>
  );
}

export default Quote;
