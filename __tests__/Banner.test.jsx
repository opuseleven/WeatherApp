import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Banner } from '../components';

describe('Banner Component', () => {

  it('Renders', () => {
    render(<Banner />);
    expect(screen.getByRole('heading')).toHaveTextContent('WeatherApp');
  })
})
