export interface DayInterface {
  weather: string;
  temp: number;
  feels_like: number;
  low_temp: number;
  high_temp: number;
  humidity: string;
  weatherDescription: string;
  precipitation: number;
  cloud_coverage: number;
  wind_speed: number;
  gusts: number;
  wind_dir: string;
  visibility: number;
  weatherId: number;
  weatherImage: string;
}

export class Day implements DayInterface {
  weather: string;
  temp: number;
  feels_like: number;
  low_temp: number;
  high_temp: number;
  humidity: string;
  weatherDescription: string;
  precipitation: number;
  cloud_coverage: number;
  wind_speed: number;
  gusts: number;
  wind_dir: string;
  visibility: number;
  weatherId: number;
  weatherImage: string;

  constructor(i: DayInterface) {
    this.weather = i.weather;
    this.temp = i.temp;
    this.feels_like = i.feels_like;
    this.low_temp = i.low_temp;
    this.high_temp = i.high_temp;
    this.humidity = i.humidity;
    this.weatherDescription = i.weatherDescription;
    this.precipitation = i.precipitation;
    this.cloud_coverage = i.cloud_coverage;
    this.wind_speed = i.wind_speed;
    this.gusts = i.gusts;
    this.wind_dir = i.wind_dir;
    this.visibility = i.visibility;
    this.weatherId = i.weatherId;
    this.weatherImage = i.weatherImage;
  }

  isSelected(day: Day | undefined): boolean {
    let returnBool = false;
    if (day) {
      if (this.weather == day.weather) {
        if (this.temp == day.temp) {
          if (this.feels_like == day.feels_like) {
            if (this.low_temp == day.low_temp) {
              if (this.high_temp == day.high_temp) {
                if (this.humidity == day.humidity) {
                  if (this.weatherDescription == day.weatherDescription) {
                    if (this.precipitation == day.precipitation) {
                      if (this.cloud_coverage == day.cloud_coverage) {
                        if (this.wind_speed == day.wind_speed) {
                          if (this.gusts == day.gusts) {
                            if (this.wind_dir == day.wind_dir) {
                              if (this.visibility == day.visibility) {
                                if (this.weatherId == day.weatherId) {
                                  if (this.weatherImage == day.weatherImage) {
                                    returnBool = true;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return returnBool;
  }
}
