import { useState, useEffect } from 'react';
import { getDay } from '../services';
import styles from '../styles/Home.module.css';
import { RenderImage, DefaultDayView, ExpandedDayView } from '../components';
import { ApiData, Day } from '../types';

interface WeatherDisplayProps {
  data: ApiData
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {

  const [today, setToday] = useState<Day | undefined>();
  const [tomorrow, setTomorrow] = useState<Day | undefined>();
  const [dayAfter, setDayAfter] = useState<Day | undefined>();
  const [selectedDay, setSelectedDay] = useState<Day | undefined>();

  useEffect(() => {
    if (data['list'].length) {
      const weatherData = data['list'];
      const todayDay = getDay(weatherData[0]);
      const tomorrowDay = getDay(weatherData[1]);
      const dayAfterDay = getDay(weatherData[2]);
      setToday(todayDay);
      setTomorrow(tomorrowDay);
      setDayAfter(dayAfterDay);
    } else {
      setToday(undefined);
      setTomorrow(undefined);
      setDayAfter(undefined);
    }
  }, [data]);

  function handleClick(day: Day | undefined) {
    if (day) {
      if (selectedDay) {
        if (day.isSelected(selectedDay)) {
          setSelectedDay(undefined);
        } else {
          setSelectedDay(day);
        }
      } else {
        setSelectedDay(day);
      }
    }
  }

  return (
    <div className={styles.grid}>
      <div className={styles.card} onClick={() => handleClick(today)}>
        <div>
          <h2>
            {
              today?.isSelected(selectedDay) ? String.fromCharCode(9662) : String.fromCharCode(9656)
            }
          </h2>
        </div>
        <h3>Today:</h3>
        <div>
          {
            today && (
              <RenderImage image={today.weatherImage} alt={today.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            today && (
              <div>
                <div>
                  {
                    selectedDay && (
                      <div>
                        {
                          today.isSelected(selectedDay) && (
                            <ExpandedDayView day={today} />
                          )
                        }
                      </div>
                    )
                  }
                </div>
                <div>
                  {
                    !today.isSelected(selectedDay) && (
                      <DefaultDayView day={today} />
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.card} onClick={() => handleClick(tomorrow)}>
        <div>
          <h2>
            {
              tomorrow?.isSelected(selectedDay) ? String.fromCharCode(9662) : String.fromCharCode(9656)
            }
          </h2>
        </div>
        <h3>Tomorrow:</h3>
        <div>
          {
            tomorrow && (
              <RenderImage image={tomorrow.weatherImage} alt={tomorrow.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            tomorrow && (
                <div>
                  <div>
                    {
                      selectedDay && (
                        <div>
                          {
                            tomorrow.isSelected(selectedDay) && (
                              <ExpandedDayView day={tomorrow} />
                            )
                          }
                        </div>
                      )
                    }
                  </div>
                  <div>
                    {
                      !tomorrow.isSelected(selectedDay) && (
                        <DefaultDayView day={tomorrow} />
                      )
                    }
                  </div>
                </div>
            )
          }
        </div>
      </div>
      <div className={styles.card} onClick={() => handleClick(dayAfter)}>
        <div>
          <h2>
            {
              dayAfter?.isSelected(selectedDay) ? String.fromCharCode(9662) : String.fromCharCode(9656)
            }
          </h2>
        </div>
        <h3>Day After:</h3>
        <div>
          {
            dayAfter && (
              <RenderImage image={dayAfter.weatherImage} alt={dayAfter.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            dayAfter && (
              <div>
                <div>
                  {
                    selectedDay && (
                      <div>
                        {
                          dayAfter.isSelected(selectedDay) && (
                            <ExpandedDayView day={dayAfter} />
                          )
                        }
                      </div>
                    )
                  }
                </div>
                <div>
                  {
                    !dayAfter.isSelected(selectedDay) && (
                      <DefaultDayView day={dayAfter} />
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export { WeatherDisplay };
