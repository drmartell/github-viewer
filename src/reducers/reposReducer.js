import { REPOS_LOADING, FETCH_REPOS } from '../actions/actions';

const initialState = {
  loading: false,
  allRepos: []
};

export default function reducer(state = initialState, { type, payload: allRepos }) {
  if(type === REPOS_LOADING) return { ...state, loading: true };
  if(type === FETCH_REPOS) return { ...state, loading: false, allRepos };
  return state;
}
