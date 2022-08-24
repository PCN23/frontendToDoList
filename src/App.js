import './App.css';
import React from 'react';
import { useState } from 'react';

export default function App() {

  const [firstName, setFirstName] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <main>
          <h1 className="signUp">Sign Up</h1>
          <form id="sign-up-form">
            <label className='first-name'>First Name</label>
            <input type="text" className="input" />
            <label className='last-name'>Last Name</label>
            <input type="text" className="input" />
            <label className='sign-up-email'>Email</label>
            <input type="email" className="input" />
            <label className='sign-up-pass'>Password</label>
            <input type="password" className="input" />
            <button className="button">Submit</button>
          </form>
        </main>
      </header>
    </div>
  );
}


