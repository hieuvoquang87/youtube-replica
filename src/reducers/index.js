import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import { items } from './items';
import { videos } from './videos';
import { collections } from './collections';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  videos,
  collections,
  routing: routerReducer
});

export default rootReducer;
