import { useState, useEffect }  from 'react'
import ForecastWeatherCard from '../Cards/ForecastWeatherCard';
import CurrentWeatherCard from '../Cards/CurrentWeatherCard';
const apiKey = "a40a5e83ca510b6857fa68548fb1236a";
// const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=a40a5e83ca510b6857fa68548fb1236a";

function Hourlyforecast() {
    const [currentWeatherData, setCurrentWeatherData] = useState(null);
    const [forecastWeatherData, setForecastWeatherData] = useState(null);
  
    const getDate = (date) => {
      console.log(date);
      const utcDate = new Date(date + " UTC");
      const estTimeZone = "America/New_York";
  
      const estFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: estTimeZone,
        weekday: "long",
      });
  
      const estDay = estFormatter.formatToParts(utcDate).find((part) => part.type === "weekday").value;
      return estDay;
    };
  
    useEffect(() => {
      console.log("useEffect is running!");
  
      const getWeatherData = (latitude, longitude) => {
        // Fetch current weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=a40a5e83ca510b6857fa68548fb1236a`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setCurrentWeatherData(data);
          })
          .catch(error => {
            console.log(error.message);
          });
  
       // Fetch forecast weather
       fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=a40a5e83ca510b6857fa68548fb1236a`)
       .then(response => response.json())
       .then(data => {
         console.log(data);
         const forcastData = data.list;
         const weeklyWeather = {};

         forcastData.forEach((forecast) => {
           console.log(forecast);
           const dayOfWeek = getDate(forecast.dt_txt);
           console.log(dayOfWeek);

           if (!weeklyWeather[dayOfWeek]) {
             weeklyWeather[dayOfWeek] = {
               temp_min: forecast.main.temp_min,
               temp_max: forecast.main.temp_max,
               description: forecast.weather[0].description,
               icon: forecast.weather[0].icon,
             };
           } else {
             // Update logic based on your needs
           }
         });

         console.log(weeklyWeather);
         setForecastWeatherData(weeklyWeather);
       })
       .catch(error => {
         console.log(error);
       });
   };
  
      // Hardcoded Boston's coordinates
      const bostonLatitude = 42.3601;
      const bostonLongitude = -71.0589;
  
      getWeatherData(bostonLatitude, bostonLongitude);
    }, []);

    return (
        <div>
      {currentWeatherData && (
        <CurrentWeatherCard
          city={currentWeatherData.name}
          image={currentWeatherData.weather[0].icon}
          description={currentWeatherData.weather[0].description}
          temp={Math.round(currentWeatherData.main.temp)}
          feelsLike={Math.round(currentWeatherData.main.feels_like)}
          humidity={currentWeatherData.main.humidity}
          pressure={currentWeatherData.main.pressure}
          wind={currentWeatherData.wind.speed}
        />
      )}
      {forecastWeatherData && (
        <div className="extended-forecast">
          <div className="content">
            <h2>Weekly Fdfdfdfdforecast</h2>
            <div className="ext-cards">
            {Object.keys(forecastWeatherData).map((dayOfWeek, index) => (
                <ForecastWeatherCard
                  day={dayOfWeek}
                  image={`http://openweathermap.org/img/w/${forecastWeatherData[dayOfWeek].icon}.png`}
                  forecast={forecastWeatherData[dayOfWeek].description}
                  max={Math.round(forecastWeatherData[dayOfWeek].temp_max)}
                  min={Math.round(forecastWeatherData[dayOfWeek].temp_min)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
      );
}
export default Hourlyforecast