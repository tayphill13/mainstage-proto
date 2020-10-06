import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/waterMusic.gif' autoPlay loop muted />
      <h1>Live Music, and Artist Content</h1>
      <p>You can enjoy your favorite artists from Home!</p>
      <div className='hero=btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            Check it Out!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Example video <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;