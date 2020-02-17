import React from 'react';
import { mount } from 'enzyme';
import ReposSection from './ReposSection';
import { Provider } from 'react-redux';
import store from '../store';

describe('ReposSection component', () => {
  it('renders ReposSection', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReposSection />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
