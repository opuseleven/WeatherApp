import { ExpandedDayView } from '../components';
import { getDay } from '../services';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ExpandedDayView Component', () => {

  const testdata = require('../data/testdata.json');

  it('Component renders', () => {
    render(<ExpandedDayView day={getDay(testdata.list[0])} />);
    const headings = screen.getAllByRole('heading');
    const details = screen.getAllByRole('detail');
    expect(headings[0]).toHaveTextContent('Clear');
    expect(details[0]).toHaveTextContent('clear sky');
    expect(details[1]).toHaveTextContent('High Temp: 61°F');
    expect(details[2]).toHaveTextContent('Low Temp: 60°F');
    expect(details[3]).toHaveTextContent('Feels Like: 55°F');
    expect(details[4]).toHaveTextContent('Humidity: 31%');
    expect(details[5]).toHaveTextContent('Precipitation: 0%');
    expect(details[6]).toHaveTextContent('Cloud Coverage: 1%');
    expect(details[7]).toHaveTextContent('Wind Speed: 4.7 mph');
    expect(details[8]).toHaveTextContent('Gusts: 9.42 mph');
    expect(details[9]).toHaveTextContent('Wind Direction: SSE');
    expect(details[10]).toHaveTextContent('Visibility: 10000 m');
  })

  it('Component passes data', () => {
    render(<ExpandedDayView day={getDay(testdata.list[3])} />);
    const headings = screen.getAllByRole('heading');
    const details = screen.getAllByRole('detail');
    expect(headings[0]).toHaveTextContent('Clouds');
    expect(details[0]).toHaveTextContent('few clouds');
    expect(details[1]).toHaveTextContent('High Temp: 46°F');
    expect(details[2]).toHaveTextContent('Low Temp: 40°F');
    expect(details[3]).toHaveTextContent('Feels Like: 44°F');
    expect(details[4]).toHaveTextContent('Humidity: 58%');
    expect(details[5]).toHaveTextContent('Precipitation: 10%');
    expect(details[6]).toHaveTextContent('Cloud Coverage: 17%');
    expect(details[7]).toHaveTextContent('Wind Speed: 4.45 mph');
    expect(details[8]).toHaveTextContent('Gusts: 8.95 mph');
    expect(details[9]).toHaveTextContent('Wind Direction: ENE');
    expect(details[10]).toHaveTextContent('Visibility: 10000 m');
  })
})
