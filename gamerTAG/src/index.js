import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import FriendsList from './components/friendsList/friendsList';
import AddFriends from './components/addFriends/addFriends';
import CreateAccount from './components/createAccount/createAccount';
import Landing from './components/landing/landing';
import SignIn from './components/sign-in/sign-in';
import ProfilePage from './components/profile/profile-page';
import {Router, Route, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { amber800, orange600 } from 'material-ui/styles/colors';
import { Provider } from 'react-redux';
import {store , history} from './store';

const muiTheme = getMuiTheme({
 palette: {
   primary1Color: amber800,
   accent1Color: orange600,
 },
 fontFamily: 'Open Sans, sans-serif',
 appBar: {
   height: 50,
 },
});

ReactDOM.render(

  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Landing}/>
            <Route path="create-account" component={CreateAccount}/>
            <Route path="sign-in" component={SignIn}/>
            <Route path="profile-page" component={ProfilePage}/>
            <Route path="friends-list" component={FriendsList}/>
            <Route path="add-friends" component={AddFriends}/>
            {/* <Route path="*" component={NoMatch}/> */}
        </Route>
    </Router>
  </Provider>
</MuiThemeProvider> ,document.getElementById('main')

);
