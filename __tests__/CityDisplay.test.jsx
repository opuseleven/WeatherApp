import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CityDisplay } from '../components';

describe('City Display Component', () => {

  const testdata = require('../data/testdata.json');

  it('Renders Component and passes data correctly', () => {
    render(<CityDisplay data={testdata} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Nashville');
  })
})
