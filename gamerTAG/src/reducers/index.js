import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import games from './games';

const rootReducer = combineReducers({users, games, routing: routerReducer});

module.exports = rootReducer;
