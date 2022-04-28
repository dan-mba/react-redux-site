/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { NavHeader } from './NavHeader';

Enzyme.configure({ adapter: new Adapter() });
global.open = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

const props = {
  classes: {
    appBar: 'abc',
    toolbar: 'def',
    linkedin: 'ghi',
    name: 'jkl',
    buttonRoot: 'mno',
    iconButton: 'pqr',
    menuText: 'stu',
  },
  location: {
    pathname: '/',
  },
  anchorEl: false,
  selectedIndex: 1,
  dispatch: jest.fn(),
};

describe('Nav Bar', () => {
  it('should render', () => {
    shallow(<NavHeader {...props} />);

    /*
    FUTURE: Implement test for menu items
    The code below simulates clicking on the menu button & setting the anchor
    Enzyme still does not render the menu & I can't figure out why

    enzymeWrapper.find('button').simulate('click');
    const { anchor } = props.dispatch.mock.calls[1][0];
    enzymeWrapper.setProps({ anchorEl: anchor });
    enzymeWrapper.update();
    const newProps = enzymeWrapper.props();
    */
  });
});
