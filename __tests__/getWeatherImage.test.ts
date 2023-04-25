import { getWeatherImage } from '../services';

describe('getWeatherImage function', () => {

  let image = "";

  it('Returns sunny by default', () => {
    image = getWeatherImage('0');
    expect(image).toBe('sunny.png');
  })

  it('Returns cloudy3', () => {
    image = getWeatherImage('805');
    expect(image).toBe('cloudy3.png');
  })

  it('Returns cloudy2', () => {
    image = getWeatherImage('802');
    expect(image).toBe('cloudy2.png');
  })

  it('Returns cloudy', () => {
    image = getWeatherImage('801');
    expect(image).toBe('cloudy.png');
  })

  it('Returns sunny by id', () => {
    image = getWeatherImage('800');
    expect(image).toBe('sunny.png');
  })

  it('Returns stormy', () => {
    image = getWeatherImage('772');
    expect(image).toBe('stormy.png');
  })

  it('Returns windy', () => {
    image = getWeatherImage('700');
    expect(image).toBe('windy.png');
  })

  it('Returns winterymix', () => {
    image = getWeatherImage('615');
    expect(image).toBe('winterymix.png');
  })

  it('Returns wintery', () => {
    image = getWeatherImage('611');
    expect(image).toBe('wintery.png');
  })

  it('Returns snow', () => {
    image = getWeatherImage('600');
    expect(image).toBe('snow.png');
  })

  it('Returns rainy', () => {
    image = getWeatherImage('502');
    expect(image).toBe('rainy.png');
  })

  it('Returns rainy2', () => {
    image = getWeatherImage('501');
    expect(image).toBe('rainy2.png');
  })

  it('Returns rainy1', () => {
    image = getWeatherImage('500');
    expect(image).toBe('rainy1.png');
  })

  it('Returns drizzle', () => {
    image = getWeatherImage('300');
    expect(image).toBe('drizzle.png');
  })

  it('Returns stormy', () => {
    image = getWeatherImage('200');
    expect(image).toBe('stormy.png');
  })
})
