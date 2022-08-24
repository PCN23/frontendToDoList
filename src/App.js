import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage';
import Todos from './todos/Todos';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todos">Todo</Link>
            </li>
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
