import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WeatherDisplay } from '../components';

describe('WeatherDisplay Component', () => {

  const testdata = require('../data/testdata.json');

  it('Renders and passes data', () => {
    render(<WeatherDisplay data={testdata} />);
    const headings = screen.getAllByRole('heading');
    const details = screen.getAllByRole('detail');
    expect(headings[1]).toHaveTextContent('Today:');
    expect(headings[2]).toHaveTextContent('Clear');
    expect(headings[4]).toHaveTextContent('Tomorrow:');
    expect(headings[5]).toHaveTextContent('Clear');
    expect(headings[7]).toHaveTextContent('Day After:');
    expect(headings[8]).toHaveTextContent('Clear');
    expect(details[0]).toHaveTextContent('clear sky');
    expect(details[1]).toHaveTextContent('Temperature: 61°F');
    expect(details[2]).toHaveTextContent('Humidity: 31%');
    expect(details[3]).toHaveTextContent('Precipitation: 0%');
  })

  it('Today expands onClick', () => {
    render(<WeatherDisplay data={testdata} />);
    let headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent(String.fromCharCode(9656));
    act(() => {
      fireEvent.click(screen.getByText('Today:'));
    })
    headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent(String.fromCharCode(9662));
  })

  it('Tomorrow expands onClick', () => {
    render(<WeatherDisplay data={testdata} />);
    let headings = screen.getAllByRole('heading');
    expect(headings[3]).toHaveTextContent(String.fromCharCode(9656));
    act(() => {
      fireEvent.click(screen.getByText('Tomorrow:'));
    })
    headings = screen.getAllByRole('heading');
    expect(headings[3]).toHaveTextContent(String.fromCharCode(9662));
  })

  it('DayAfter expands onClick', () => {
    render(<WeatherDisplay data={testdata} />);
    let headings = screen.getAllByRole('heading');
    expect(headings[6]).toHaveTextContent(String.fromCharCode(9656));
    act(() => {
      fireEvent.click(screen.getByText('Day After:'));
    })
    headings = screen.getAllByRole('heading');
    expect(headings[6]).toHaveTextContent(String.fromCharCode(9662));
  })
})
