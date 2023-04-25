import { DefaultDayView } from '../components';
import { getDay } from '../services';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DefaultDayView Component', () => {

  const testdata = require('../data/testdata.json');

  it('Component renders', () => {
    render(<DefaultDayView day={getDay(testdata.list[0])} />);
    const headings = screen.getAllByRole('heading');
    const details = screen.getAllByRole('detail');
    expect(headings[0]).toHaveTextContent('Clear');
    expect(details[0]).toHaveTextContent('clear sky');
    expect(details[1]).toHaveTextContent('Temperature: 61°F');
    expect(details[2]).toHaveTextContent('Humidity: 31%');
    expect(details[3]).toHaveTextContent('Precipitation: 0%');
  })

  it('Component passes data', () => {
    render(<DefaultDayView day={getDay(testdata.list[3])} />)
    const headings = screen.getAllByRole('heading');
    const details = screen.getAllByRole('detail');
    expect(headings[0]).toHaveTextContent('Clouds');
    expect(details[0]).toHaveTextContent('few clouds');
    expect(details[1]).toHaveTextContent('Temperature: 46°F');
    expect(details[2]).toHaveTextContent('Humidity: 58%');
    expect(details[3]).toHaveTextContent('Precipitation: 0%');
  })
})
