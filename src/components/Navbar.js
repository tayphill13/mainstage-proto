import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            MainStage <i className='fas fa-couch' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/artists' className='nav-links' onClick={closeMobileMenu}>
                Artists
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign In
              </Link>
            </li>
          </ul>
          <Link to='/sign-up'>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
          </Link>
          <Link to='/login'>
            {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
          </Link>
        </div>
      </nav>

    </>
  );
}

export default NavBar;
