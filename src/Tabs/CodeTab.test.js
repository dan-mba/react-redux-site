/* eslint react/jsx-filename-extension: "off" */
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { CodeTab } from './CodeTab';
import LIBRARIES from '../config/libraries';
import SAMPLES from '../config/samples';

global.open = jest.fn();

const props = {
  classes: {
    main: 'abc',
    chip: 'def',
    cardRoot: 'ghi',
    headerRoot: 'jkl',
    headerContent: 'mno',
    cardContent: 'pqr',
    actionRoot: 'stu',
    selectors: 'vwx',
    sel: 'yza',
    selLink: 'bcd',
  },
  theme: {
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#111',
      },
    },
  },
  selected: 'react',
  libraries: LIBRARIES,
  samples: SAMPLES,
  dispatch: jest.fn(),
};

describe('Code Tab', () => {
  it('should render main Tab', () => {
    render(<CodeTab {...props} />);
    expect(screen.getByTestId('code-tab')).toHaveClass('abc');

    expect(props.dispatch.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByTestId('node'));
    expect(props.dispatch.mock.calls.length).toBe(1);

    props.dispatch.mockClear();
    expect(props.dispatch.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByTestId('all'));
    expect(props.dispatch.mock.calls.length).toBe(1);

    fireEvent.click(screen.getAllByText('App')[0]);
    expect(window.open).toHaveBeenCalled();

    global.open.mockClear();
    fireEvent.click(screen.getAllByText('Api')[0]);
    expect(window.open).toHaveBeenCalled();

    global.open.mockClear();
    fireEvent.click(screen.getAllByText('Show Code')[0]);
    expect(window.open).toHaveBeenCalled();
  });
});
