import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';
import { Provider } from 'react-redux';
import store from '../store';

describe('Search component', () => {
  it('renders Search', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Search />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
