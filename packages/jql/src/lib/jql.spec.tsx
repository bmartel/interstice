import { render } from '@testing-library/react';

import Jql from './jql';

describe('Jql', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Jql />);
    expect(baseElement).toBeTruthy();
  });
});
