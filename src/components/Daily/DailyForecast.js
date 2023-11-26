import { useState, useEffect }  from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ForecastWeatherCard from '../Cards/ForecastWeatherCard';
import CurrentWeatherCard from '../Cards/CurrentWeatherCard';
import "../Styles/Styles.css";

// const apiKey = "a40a5e83ca510b6857fa68548fb1236a";

// const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=a40a5e83ca510b6857fa68548fb1236a";

function DailyForecast() {
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
             console.log("error from dailyforecast page")
           }
         });

         console.log(weeklyWeather);
         setForecastWeatherData(weeklyWeather);
       })
       .catch(error => {
         console.log(error);
       });
   };
  

      const bostonLatitude = 42.3601;
      const bostonLongitude = -71.0589;
  
      getWeatherData(bostonLatitude, bostonLongitude);
    }, []);

    return (

      <Container>
      {currentWeatherData && (
        <Row className="mt-4">
          <Col>
            <CurrentWeatherCard
              city={currentWeatherData.name}
              image={currentWeatherData.weather[0].icon}
              description={currentWeatherData.weather[0].description}
              temp={currentWeatherData.main.temp}
              feelsLike={currentWeatherData.main.feels_like}
              humidity={currentWeatherData.main.humidity}
              pressure={currentWeatherData.main.pressure}
              wind={currentWeatherData.wind.speed}
            />
          </Col>
        </Row>
      )}
      {forecastWeatherData && (
        <Row className="mt-4">
          <Col>
            <div className="forecastmain">
              <h2>Weekly Forecast</h2>
              <div className="tcards">
                {Object.keys(forecastWeatherData).map((dayOfWeek, index) => (
                  <ForecastWeatherCard
                    key={index} // Add a unique key prop
                    day={dayOfWeek}
                    image={`http://openweathermap.org/img/w/${forecastWeatherData[dayOfWeek].icon}.png`}
                    forecast={forecastWeatherData[dayOfWeek].description}
                    max={(forecastWeatherData[dayOfWeek].temp_max)}
                    min={(forecastWeatherData[dayOfWeek].temp_min)}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
      );
}
export default DailyForecast