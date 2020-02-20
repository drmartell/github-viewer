import { USER_LOADING, FETCH_USER } from '../actions/actions';

const initialState = {
  loading: false,
  user: {
    login: 'User not found',
    name: '',
    followers: 0,
    following: 0,
    html_url: 'n/a'
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, loading: false, user: payload };
    default:
      return state;
  }
}
