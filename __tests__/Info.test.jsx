import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from '../components';

describe('Info Component', () => {

  it('Component renders', () => {
    render(<Info />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('Search by city name.');
    expect(headings[1]).toHaveTextContent('Format: "Nashville, TN"');
    expect(headings[2]).toHaveTextContent('Or search by zip code');
  })
})
