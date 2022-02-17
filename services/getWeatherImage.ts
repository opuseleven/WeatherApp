function getWeatherImage(weatherId: string) {
  const id: number = Number(weatherId);
  let image: string;

  if (id > 803) {
    image = 'cloudy3.png';
  } else if (id > 801) {
    image = 'cloudy2.png';
  } else if (id === 801) {
    image = 'cloudy.png';
  } else if (id === 800) {
    image = 'sunny.png';
  } else if (id > 770) {
    image = 'stormy.png';
  } else if (id > 699) {
    image = 'windy.png';
  } else if (id > 614) {
    image = 'winterymix.png';
  } else if (id > 610) {
    image = 'wintery.png';
  } else if (id > 599) {
    image = 'snow.png';
  } else if (id > 501) {
    image = 'rainy.png';
  } else if (id === 501) {
    image = 'rainy2.png';
  } else if (id === 500) {
    image = 'rainy1.png';
  } else if (id > 299) {
    image = 'drizzle.png';
  } else if (id > 199) {
    image = 'stormy.png';
  } else {
    image = 'sunny.png';
  }
  return image;
}

export { getWeatherImage };
