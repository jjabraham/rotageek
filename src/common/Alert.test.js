import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert tests', () => {
  const testMessage = 'Test Message!';
  it('renders without crashing', () => {
    shallow(<Alert hide message={testMessage} type="success" />);
  });
  it('hides alert message correctly', () => {
    const wrapper = shallow(<Alert hide message={testMessage} type="success" />);
    expect(wrapper.contains(testMessage)).toEqual(false);
  });
  it('renders alert message correctly', () => {
    const wrapper = shallow(<Alert hide={false} message={testMessage} type="success" />);
    expect(wrapper.contains(testMessage)).toEqual(true);
  });
  it('renders HTML class correctly', () => {
    let wrapper = shallow(<Alert hide={false} message={testMessage} type="success" />);
    expect(wrapper.find('div.alert-success').length).toEqual(1);
    wrapper = shallow(<Alert hide={false} message={testMessage} type="danger" />);
    expect(wrapper.find('div.alert-danger').length).toEqual(1);
  });
});
