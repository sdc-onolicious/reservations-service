import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Time from '../client/src/Time.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<Time />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


describe('Time List Rendering', () => {
  it('renders a select drop down list', () => {
    const wrapper = shallow(<Time />);
    const list = wrapper.find('.time-list');
    expect(list.length).toBe(1);
    expect(list.find('.time-selected').length).toBe(48);
  });
});
