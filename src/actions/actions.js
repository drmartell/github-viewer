import { getUser, getRepos } from '../services/api';

/* SEARCH */
export const SEARCHING = 'SEARCHING';

export const searching = () =>
  dispatch => {
    dispatch({ type: SEARCHING });
  };

/* USER */
export const USER_LOADING = 'USER_LOADING';
export const FETCH_USER = 'FETCH_USER';

export const fetchUser = userName =>
  dispatch => {  
    dispatch({ type: USER_LOADING });
    return getUser(userName).then(user => {
      if(user.message) dispatch({ type: FETCH_USER, payload: {
        login: 'User not found',
        name: '',
        followers: 0,
        following: 0,
        html_url: 'n/a'
      } });
      else dispatch({ type: FETCH_USER, payload: user });
    });
  };

/* REPOS */
export const REPOS_LOADING = 'REPOS_LOADING';
export const FETCH_REPOS = 'FETCH_REPOS';

export const fetchRepos = userName =>
  dispatch => {  
    dispatch({ type: REPOS_LOADING });
    return getRepos(userName).then(allRepos => {
      dispatch({ type: FETCH_REPOS, payload: allRepos });
    });
  };
