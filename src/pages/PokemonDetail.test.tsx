import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import PokemonDetail from './PokemonDetail';

describe('PokemonDetail Component TDD', () => {
  test('renders heading correctly', () => {
    render(<PokemonDetail />);
    const headingElement = screen.getByText(/technical test - density labs/i);
    expect(headingElement).toBeInTheDocument();
    console.log({ headingElement });
  });
});