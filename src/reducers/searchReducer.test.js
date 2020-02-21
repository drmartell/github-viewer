import { SEARCHING } from '../actions/actions';
import reducer from './searchReducer';

describe('search reducer', () => {
  it('handles the searching action', () => {
    const action = { type: SEARCHING };
    const initialState = { searching: false };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ searching: true });
  });
});
