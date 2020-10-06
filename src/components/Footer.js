import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the MainStage newsletter to receive the latest updates on new artists and new artist content
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>My Github</Link>
            <Link to='/'>My LinkedIn</Link>
            <Link to='/'>My Profile Page</Link>
            <Link to='/contact'>Contact Me</Link>
            {/* <Link to='/'></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
