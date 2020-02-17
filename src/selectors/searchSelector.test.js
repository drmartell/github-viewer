import { isSearching } from './searchSelector';

describe('search selectors', () => {
  it('selects the searching state', () => {
    const state = {
      search: { searching: true }
    };

    expect(isSearching(state)).toEqual(true);
  });
});
