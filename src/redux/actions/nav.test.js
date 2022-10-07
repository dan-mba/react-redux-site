import { menuOpen, menuClose } from './nav';

describe('actions', () => {
  it('creates an action for a menu open', () => {
    const anchor = true;
    const expectedAction = {
      type: 'nav/UPDATE_ANCHOR',
      anchor,
    };
    expect(menuOpen(anchor)).toEqual(expectedAction);
  });

  it('creates an action for a menu close', () => {
    const expectedAction = {
      type: 'nav/UPDATE_ANCHOR',
      anchor: false,
    };
    expect(menuClose()).toEqual(expectedAction);
  });
});
