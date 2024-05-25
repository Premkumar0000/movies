// Import the CSS file

// Your component code
import React from 'react';
import './App.css';
import Movie_cards from './Movie_cards';
const Landing = () => {
  return (
    <div>
      <div className="box" id='long' style={{ border: '1px solid black', height: '254vh', width: '100%', backgroundColor: '#0F0F0F' }}>
        <div className="text">
          <center>
            <p id='First' >Where Quality & Clarity Matters</p>
            <p id='second' >Watch Telugu movies in HD, exclusively available on iBOMMA.ONE<br></br>Developed for smartphone, tablets, PC & TV.</p>
            <p style={{ color: 'white', fontSize: '15px' }}></p>
          </center>
        </div>
        <Movie_cards></Movie_cards>
      </div>
    </div>
  );
};

export default Landing;
