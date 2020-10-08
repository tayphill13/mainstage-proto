import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import '../../App.css';
import app from '.././base.js';
import { AuthContext } from '.././Auth';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      {/* <h1 className='login'>Log in</h1> */}
      <form className='login' onSubmit={handleLogin}>
        <label>
          Email
        </label>
        <input name='email' type='email' placeholder='Email' />
        <label>
          Password
        </label>
        <input name='password' type='password' placeholder='Password' />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);