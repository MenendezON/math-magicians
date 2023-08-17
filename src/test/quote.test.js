import * as React from 'react';
import { render } from '@testing-library/react';
import QuoteComponent from '../pages/Quote';

describe('QuoteDisplay', () => {
  it('renders QuoteDisplay component', () => {
    const { container } = render(<QuoteComponent />);
    expect(container).toMatchSnapshot();
  });
});