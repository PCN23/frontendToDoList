import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthPage from './AuthPage';
import Todos from './todos/Todos';
import { getUser, logoutUser } from './utils/fetch-utils';

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUserData();
  }, []);

  async function handleLogoutClick() {
    await logoutUser();
    setUser('');
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todos">To do</Link>
            </li>
            <li>{user && <button onClick={handleLogoutClick}>logout</button>}</li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>

          <Route exact path="/todos">
            <Todos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
