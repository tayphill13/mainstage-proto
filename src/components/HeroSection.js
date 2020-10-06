import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Enjoy your favorite artists from Home!</h1>
      <p>While we wait for live shows to come back</p>
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