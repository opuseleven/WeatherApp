import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WeatherDisplay } from '../components';

describe('WeatherDisplay Component', () => {

  const testdata = require('../data/testdata.json');

  it('Renders and passes data', () => {
    render(<WeatherDisplay data={testdata} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[1]).toHaveTextContent('Clear');
    expect(headings[3]).toHaveTextContent('Clear');
    expect(headings[5]).toHaveTextContent('Clear');
  })
})
