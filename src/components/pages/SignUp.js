import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import app from '.././base.js';
import '../../App.css';


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1 className='sign-up-banner'>Sign up</h1>
      <form className='sign-up' onSubmit={handleSignUp}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);