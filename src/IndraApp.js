import React from 'react';
import Home from './pages/Home';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './scss/global.scss';

const App = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
