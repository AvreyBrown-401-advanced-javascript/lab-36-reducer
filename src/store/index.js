import { createStore, combineReducers } from 'redux';

import appReducer from './app-reducers.js';
import numbersReducer from './numbers-reducer.js';

let reducers = combineReducers({
  app: appReducer,
  numbers: numbersReducer
});

export default () => createStore(reducers);
