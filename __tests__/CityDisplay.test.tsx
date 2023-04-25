import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CityDisplay } from '../components';

describe('City Display Component', () => {

  const testdata = require('../data/testdata.json');

  it('Renders Component and passes data correctly', () => {
    render(<CityDisplay data={testdata} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('Nashville');
    expect(headings[1]).toHaveTextContent('36.1659°N x -86.7844°W');
    expect(headings[2]).toHaveTextContent('Sunrise:');
  })
})
