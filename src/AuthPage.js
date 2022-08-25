import React from 'react';
import { useState } from 'react';
import { signInUser, signUpUser } from './utils/fetch-utils';

export default function AuthPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await signUpUser({
      firstName,
      lastName,
      email,
      password,
    });
  }
  async function handleSignInSubmit(e) {
    e.preventDefault();
    await signInUser({
      email: signInEmail,
      password: signInPassword,
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <main>
          <h1 className="signUp">Sign Up</h1>
          <form onSubmit={handleSubmit} id="sign-up-form">
            <label className="first-name">First Name</label>
            <input
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="input"
            />
            <label className="last-name">Last Name</label>
            <input
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="input"
            />
            <label className="sign-up-email">Email</label>
            <input
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input"
            />
            <label className="sign-up-pass">Password</label>
            <input
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="input"
            />
            <button className="button">Submit</button>
          </form>

          <h1 className="signIn">Sign IN</h1>
          <form onSubmit={handleSignInSubmit} id="sign-in-form">
            <label className="sign-in-email">Email</label>
            <input
              value={signInEmail}
              required
              onChange={(e) => setSignInEmail(e.target.value)}
              type="email"
              className="input"
            />
            <label className="sign-in-pass">Password</label>
            <input
              value={signInPassword}
              required
              onChange={(e) => setSignInPassword(e.target.value)}
              type="password"
              className="input"
            />
            <button className="sign-in-button">Submit</button>
          </form>
        </main>
      </header>
    </div>
  );
}
