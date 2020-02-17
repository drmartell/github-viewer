import React from 'react';
import { shallow } from 'enzyme';
import ReposSection from './ReposSection';

describe('ReposSection component', () => {
  it('renders ReposSection', () => {
    const wrapper = shallow(<ReposSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
