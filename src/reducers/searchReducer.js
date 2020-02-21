import { SEARCHING } from '../actions/actions';

const initialState = { searching: false };

export default function reducer(state = initialState, { type }) {
  if(type === SEARCHING) return { ...state, searching: true };
  return state;
}
