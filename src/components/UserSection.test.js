import React from 'react';
import { shallow } from 'enzyme';
import UserSection from './UserSection';

describe('UserSection component', () => {
  it('renders UserSection', () => {
    const wrapper = shallow(<UserSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
