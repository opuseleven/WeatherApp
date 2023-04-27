import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';

describe('Home', () => {

  it('Renders', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('WeatherApp');
    expect(headings[1]).toHaveTextContent('Search by city name.');
    expect(headings[2]).toHaveTextContent('Or search by zip code');
    expect(headings[3]).toHaveTextContent('Nashville');
  })

  it('Searches by city', async () => {
    render(<Home />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000))
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'chicago'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(await screen.findByText('Chicago')).toBeInTheDocument();
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
    expect(await screen.findByText('Milton-Freewater')).toBeInTheDocument();
  })

  it('Additional test for city search', async () => {
    render(<Home />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000));
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'paducah, ky'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(await screen.findByText('Paducah')).toBeInTheDocument();
  })

  it('Additional test for zip code', async () => {
    render(<Home />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000))
    })
    act(() => {
      fireEvent.change(screen.getByRole('combobox'), {target: {value: 'Zip Code Search'}});
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: '37206'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(await screen.findByText('Nashville')).toBeInTheDocument();
  })

  it('Returns an error if city search fails', async () => {
    render(<Home />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000));
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'xowlkne'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(await screen.findByText('Error: Error finding that city.')).toBeInTheDocument();
  })

  it('Returns an error if zip search fails', async () => {
    render(<Home />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000));
    })
    act(() => {
      fireEvent.change(screen.getByRole('combobox'), {target: {value: 'Zip Code Search'}});
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: '37296'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(await screen.findByText('Error: Error finding that city.')).toBeInTheDocument();
  })
})
