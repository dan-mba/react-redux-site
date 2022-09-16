/* eslint react/jsx-filename-extension: "off" */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WorkTab } from './WorkTab';

global.open = jest.fn();

const props = {
  classes: {
    root: 'abc',
    list: 'def',
    avatar: 'ghi',
    avatarRoot: 'jkl',
    content: 'mno',
    header: 'pqr',
    title: 'stu',
    subheader: 'vwx',
    jobDescription: 'yza',
    expand: 'bcd',
    expandOpen: 'efg',
  },
  expanded: [false, false, false, false, false, true],
  dispatch: jest.fn(),
};

describe('Work Tab', () => {
  it('should render main Tab', () => {
    render(<WorkTab {...props} />);
    expect(screen.getByTestId('work-tab')).toHaveClass('abc');
  });
});
