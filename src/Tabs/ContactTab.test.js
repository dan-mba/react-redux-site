/* eslint react/jsx-filename-extension: "off" */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ContactTab } from './ContactTab';

const props = {
  classes: {
    root: 'abc',
    card: 'def',
    body: 'ghi',
    img: 'jkl',
    content: 'mno',
    chipBox: 'pqr',
    chip: 'stu',
    link: 'vwx',
  },
};

describe('Contact Tab', () => {
  it('should render', () => {
    render(<ContactTab {...props} />);
    expect(screen.getByTestId('contact-tab')).toHaveClass('abc');
  });
});
