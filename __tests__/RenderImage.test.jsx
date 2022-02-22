import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RenderImage } from '../components';

describe('RenderImage', () => {

  it('Renders component with image', async () => {
    render(<RenderImage image={'/../public/weather-images/cloudy.png'} />);
    await(screen.getByRole('img'));
    expect(screen.getByRole('img')).toBeDefined();
  })
})
