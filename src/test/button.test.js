import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom matchers
import Keys from '../components/button'; // Adjust the import path based on your project structure

describe('Keys component', () => {
  it('renders all keys', () => {
    const mockClick = jest.fn(); // Create a mock function to simulate the click event
    render(<Keys click={mockClick} />);

    const keys = [
      'AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
    ];

    keys.forEach((key) => {
      const keyButton = screen.getByText(key);
      expect(keyButton).toBeInTheDocument();

      fireEvent.click(keyButton);
      expect(mockClick).toHaveBeenCalledWith(key);
    });
  });
});
