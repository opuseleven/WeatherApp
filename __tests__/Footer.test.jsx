import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../components';

describe('Footer Component', () => {

  it('Component Renders', () => {
    render(<Footer />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('Data provided by:');
    expect(headings[1]).toHaveTextContent('openweathermap.org');
    const link = screen.getByRole('link');
    expect(link.href).toBe('https://www.openweathermap.org/');
  })
})
