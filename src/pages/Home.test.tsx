
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Home from './Home';

describe('Home Component TDD', () => {
  test('renders heading correctly', () => {
    render(<Home />);
    const headingElement = screen.getByText(/technical test - density labs/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-3xl');
    expect(headingElement).toHaveClass('text-center');
  });
});
