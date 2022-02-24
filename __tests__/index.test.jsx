import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';

describe('Home', () => {

  it('Renders', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('WeatherApp');
    expect(headings[1]).toHaveTextContent('Search by city name.');
    expect(headings[2]).toHaveTextContent('Nashville');
  })

/*
  it('Searches by city', async () => {
    render(<Home />);
    fireEvent.change(getByRole('input'), {target: {value: 'chicago'}});
    fireEvent.click(screen.getByRole('button'));
    await screen.findByText('Chicago');
    const headings = screen.getAllByRole('heading');
    expect(headings[2]).toHaveTextContent('Chicago');
  })
*/
})
