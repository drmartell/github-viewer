import React from 'react';
import { mount } from 'enzyme';
import UserSection from './UserSection';
import { Provider } from 'react-redux';
import store from '../store';

describe('UserSection component', () => {
  it('renders UserSection', () => {
    const wrapper = mount(
      <Provider store={store}>
        <UserSection />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
