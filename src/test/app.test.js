import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

it('testing title', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
});
