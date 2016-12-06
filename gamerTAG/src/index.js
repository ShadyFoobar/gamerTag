import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Dashboard from './components/dashboard/dashboard';
import CreateAccount from './components/createAccount/createAccount';
import Landing from './components/landing/landing';
import SignIn from './components/sign-in/sign-in';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Landing}/>
          <Route path="create-account" component={CreateAccount}/>
          <Route path="sign-in" component={SignIn}/>
          <Route path="dashboard" component={Dashboard}/> {/* <Route path="*" component={NoMatch}/> */}
      </Route>
  </Router>, document.getElementById('main'));
