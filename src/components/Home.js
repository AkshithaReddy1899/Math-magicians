import React from 'react';
import style from '../styles/App.module.css';

function Home() {
  return (
    <div className={style.home}>
      <h1>Welcome to our page!</h1>
      <div className={style.mainDescription}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni itaque provi</p>
        <br />
        t atque consequuntur possimus quam, repellat at, soluta sunt maiores facere rerum
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Home;
