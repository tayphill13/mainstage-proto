import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Live Music and Artist Content</h1>
      <p>You can enjoy your favorite artists from Home!</p>
      <div className='hero-btns'>
        <Link to='/about'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            Check it Out!
        </Button>
        </Link>
        <Link to='/music'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Example video <i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;