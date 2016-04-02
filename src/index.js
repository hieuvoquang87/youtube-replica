import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/configureStore';
import routes from './routes';

//const history = useRouterHistory(createHashHistory)({ queryKey: false });
//const store = configureStore();

let state = window.__initialState__ || undefined;

const store = configureStore(browserHistory, state);

const createScrollHistory = useScroll(createBrowserHistory);

const appHistory = useRouterHistory(createScrollHistory)();

const history = syncHistoryWithStore(appHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
