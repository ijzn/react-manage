import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/loading/index.js';
const Admin = lazy(() => import('./App.js'));
const Login = lazy(() => import('./pages/login/index.js'));
const App = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={props => <Admin {...props} />} />
        <Route exact path="/login" component={props => <Login {...props} />} />
      </Switch>
    </Suspense>
  </Router>
);


ReactDOM.render(<App />, document.getElementById('root'));
