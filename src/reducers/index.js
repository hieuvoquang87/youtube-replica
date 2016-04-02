import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import { items } from './items';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  routing: routerReducer
});

export default rootReducer;
