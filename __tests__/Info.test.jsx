import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from '../components';

describe('Info Component', () => {

  it('Component renders', () => {
    render(<Info />);
    expect(screen.getByRole('heading')).toHaveTextContent('Search by city name.');
  })
})
