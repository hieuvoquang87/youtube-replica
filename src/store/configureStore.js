import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers';

export default function configureStore(history, initialState = {}) {
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === `development`, // eslint-disable-line no-unused-vars
  });

  const middleware = applyMiddleware(thunkMiddleware, routerMiddleware(history), logger);

  const store = middleware(createStore)(rootReducer, initialState);
  

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
