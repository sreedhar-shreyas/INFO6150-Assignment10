
import { useState, useEffect }  from 'react'

import "../Styles/Styles.css";

import { useParams } from "react-router-dom";
import OneMoreCard from '../Cards/OneMoreCard';



function HourForecast() {
  const { day } = useParams();
  const [hourlyWeatherData, setHourlyWeatherData] = useState(null);

  const getESTTime = (date) => {
    const utcDate = new Date(date + " UTC");
    const estTimeZone = "America/New_York";
    const estFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: estTimeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return estFormatter.format(utcDate);
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        const bostonLatitude = 42.3601;
        const bostonLongitude = -71.0589;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${bostonLatitude}&lon=${bostonLongitude}&units=metric&appid=a40a5e83ca510b6857fa68548fb1236a`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const hourlyData = data.list.filter(
          (forecast) => new Date(forecast.dt_txt + " UTC").toLocaleDateString("en-US", { weekday: 'long' }) === day
        );
        setHourlyWeatherData(hourlyData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getLocation();
  }, [day]);

  return (
    <>
    <div className='hourlymain'>
      {hourlyWeatherData && (
        <div className='hourname'>
          <h1> Hourly Forecast for {day}</h1>
        <div className="daily-cards">
          {hourlyWeatherData.map((hourlyForecast) => (
            <OneMoreCard
              key={hourlyForecast.dt} // Add a unique key prop
              temp={hourlyForecast.main.temp}
              max={hourlyForecast.main.temp_max}
              min={hourlyForecast.main.temp_min}
              humidity={hourlyForecast.main.humidity}
              image={`http://openweathermap.org/img/w/${hourlyForecast.weather[0].icon}.png`}
              desc={hourlyForecast.weather[0].description}
              time={getESTTime(hourlyForecast.dt_txt)}
            />
          ))}
        </div>
        </div>
      )}
      </div>
    </>
  );
}

export default HourForecast;
