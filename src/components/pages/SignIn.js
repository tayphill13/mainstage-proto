import React from 'react';
import '../../App.css';
import app from "./firebase";

export default function SignIn() {
  return <h1 className='sign-in'>Sign in for returning artists</h1>,
  <button onClick={() => app.auth().signOut()}>Sign out</button>
}