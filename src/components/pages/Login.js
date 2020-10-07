import React from 'react';
import '../../App.css';
import app from './firebase';

export default function Login() {
  return (
  <>  
    <h1 className='login'>Returning Artist Login</h1>
    <button onClick={() => app.auth().signOut()}>Sign out</button>
  </>
  )
}