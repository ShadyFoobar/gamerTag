import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';

import rootReducer from './reducers/index';

import users from './data/users';

const defaultState = {
  users: users

};

const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);

module.exports = {
  store,
  history
};
