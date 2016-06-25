import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import authenticate from './authenticate-route'

// Layout
import MainLayout from './components/main-layout';

// Pages
import Home from './components/home';
import MessageContainer from './components/message-container';
import Login from './components/login';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="messages" component={authenticate(MessageContainer)} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);