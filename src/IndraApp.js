import React from 'react';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import { ToastContainer } from 'react-toastify';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SessionProvider } from './context/SessionContext';
import './scss/global.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <SessionProvider>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/welcome" component={Welcome} />
          <Redirect to="/" />
        </Switch>
      </SessionProvider>
    </Router>
  );
}

export default App;
