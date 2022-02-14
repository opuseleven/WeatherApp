function getWeatherImage(weatherId: number) {
  const id: number = weatherId;
  let image = '';

  if (id > 803) {
    image = '../public/weather-images/cloudy3.png';
  } else if (id > 801) {
    image = '../public/weather-images/cloudy2.png';
  } else if (id === 801) {
    image = '../public/weather-images/cloudy.png';
  } else if (id === 800) {
    image = '../public/weather-images/sunny.png';
  } else if (id > 770) {
    image = '../public/weather-images/stormy.png';
  } else if (id > 699) {
    image = '../public/weather-images/windy.png';
  } else if (id > 614) {
    image = '../public/weather-images/winterymix.png';
  } else if (id > 610) {
    image = '../public/weather-images/wintery.png';
  } else if (id > 599) {
    image = '../public/weather-images/snow.png';
  } else if (id > 501) {
    image = '../public/weather-images/rainy.png';
  } else if (id === 501) {
    image = '../public/weather-images/rainy2.png';
  } else if (id === 500) {
    image = '../public/weather-images/rainy1.png';
  } else if (id > 299) {
    image = '../public/weather-images/drizzle.png';
  } else if (id > 199) {
    image = '../public/weather-images/stormy.png';
  } else {
    image = '../public/weather-images/sunny.png';
  }
  return image;
}

export { getWeatherImage };
