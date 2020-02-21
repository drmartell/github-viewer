import { combineReducers } from 'redux';
import user from './userReducer';
import repos from './reposReducer';
import search from './searchReducer';

export default combineReducers({
  user,
  repos,
  search
});
