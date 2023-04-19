import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';

describe('Home', () => {

  it('Renders', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('WeatherApp');
    expect(headings[1]).toHaveTextContent('Search by city name.');
    expect(headings[2]).toHaveTextContent('Format: "Nashville, TN"');
    expect(headings[3]).toHaveTextContent('Or search by zip code');
    expect(headings[4]).toHaveTextContent('Nashville');
  })

  it('Searches by city', async () => {
    render(<Home />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000))
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'chicago, il'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    await act(async () => {
      await new Promise(r => setTimeout(r, 2000));
    })
    const headings = screen.getAllByRole('heading');
    expect(headings[4]).toHaveTextContent('Chicago');
  })

  it('Searches by zip code', async () => {
    render(<Home />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000))
    })
    act(() => {
      fireEvent.change(screen.getByRole('combobox'), {target: {value: 'Zip Code Search'}});
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: '97862'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    await act(async () => {
      await new Promise(r => setTimeout(r, 2000));
    })
    const headings = screen.getAllByRole('heading');
    expect(headings[4]).toHaveTextContent('Milton-Freewater');
  })
})
