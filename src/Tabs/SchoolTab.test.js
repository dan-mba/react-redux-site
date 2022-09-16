/* eslint react/jsx-filename-extension: "off" */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SchoolTab } from './SchoolTab';

global.open = jest.fn();

const props = {
  classes: {
    root: 'abc',
    media: 'def',
    card: 'ghi',
    cardContent: 'jkl',
    title: 'mno',
    subtitle: 'pqr',
    link: 'stu',
  },
};

describe('School Tab', () => {
  it('should render main Tab', () => {
    render(<SchoolTab {...props} />);
    expect(screen.getByTestId('school-tab')).toHaveClass('abc');
  });
});
