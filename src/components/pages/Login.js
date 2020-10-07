import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
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
      <h1 className='login'>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Password
          <input name='password' type='email' placeholder='Password' />
        </label>
        <button type='submit'>Log in</button>
      </form>
      <h1 className='login'>Returning Artist Login</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default withRouter(Login);