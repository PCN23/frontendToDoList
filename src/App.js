import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <h1 className="signUp">Sign Up</h1>
          <form id="sign-up">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" className="input" />
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" className="input" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="input" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="input" />
            <button className="button">Submit</button>
          </form>
        </main>
      </header>
    </div>
  );
}

export default App;
