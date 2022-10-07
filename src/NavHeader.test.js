/* eslint react/jsx-filename-extension: "off" */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NavHeader } from './NavHeader';

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
    render(<NavHeader {...props} />);

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
