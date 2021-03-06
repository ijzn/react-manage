import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '@/components/loading/index.js';
const Admin = lazy(() => import('@/App.js'));
const Login = lazy(() => import('@/pages/login/index.js'));
const Nomatch = lazy(() => import('@/pages/nomatch/index.js'));
const Home = lazy(() => import('@/pages/home/index.js'));
const Routers = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/login" component={props => <Login {...props} />} />
        <Route path="/" render={() =>
          <Admin>
            <Switch>
              <Route exact path="/home" component={props => <Home {...props} />} />
              <Redirect to="/home" />
            </Switch>
          </Admin>
        } />
        <Route component={props => <Nomatch {...props} />} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routers;
