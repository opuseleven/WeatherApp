

function getWeatherImage({ weatherId }) {

  let returnImage;
  if (weatherId > 803){
    returnImage = `/weather-images/cloudy3.png`;
  }else if (weatherId > 801){
    returnImage = `/weather-images/cloudy2.png`;
  }else if (weatherId === 801){
    returnImage = `/weather-images/cloudy.png`;
  }else if (weatherId === 800){
    returnImage = `/weather-images/sunny.png`;
  }else if (weatherId > 770){
    returnImage = `/weather-images/stormy.png`;
  }else if (weatherId > 699){
    returnImage = `/weather-images/windy.png`;
  }else if (weatherId > 614){
    returnImage = `/weather-images/winterymix.png`;
  }else if (weatherId > 610){
    returnImage = `/weather-images/wintery.png`;
  }else if (weatherId > 599){
    returnImage = `/weather-images/snow.png`;
  }else if (weatherId > 501){
    returnImage = `/weather-images/rainy.png`;
  }else if (weatherId === 501){
    returnImage = `/weather-images/rainy2.png`;
  }else if (weatherId === 500){
    returnImage = `/weather-images/rainy1.png`;
  }else if (weatherId > 299){
    returnImage = `/weather-images/drizzle.png`;
  }else if (weatherId > 199){
    returnImage = `/weather-images/stormy.png`;
  }else{
    returnImage = `/weather-images/sunny.png`;
  }
  return returnImage;
}

export { getWeatherImage };
