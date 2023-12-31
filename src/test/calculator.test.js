import { render } from '@testing-library/react';
import React from 'react';

import Calculator from '../pages/Calculator';

describe('Calculator snapshot', () => {
  test('should render <Calculator /> correctly', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
