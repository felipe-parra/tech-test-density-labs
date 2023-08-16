
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';


describe('App', () => {
  it('should render correctly', () => {
    render(<App />)
    const headingElement = screen.getByText(/technical test - density labs/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-3xl');
    expect(headingElement).toHaveClass('text-center');
  })

})