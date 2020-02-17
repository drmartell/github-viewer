import { USER_LOADING, FETCH_USER } from '../actions/actions';

const initialState = {
  loading: false,
  details: {
    login: 'User not found',
    name: '',
    followers: 0,
    following: 0,
    html_url: 'n/a'
  }
};

export default function reducer(state = initialState, { type, payload: details }) {
  switch(type) {
    case USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, loading: false, details };
    default:
      return state;
  }
}
