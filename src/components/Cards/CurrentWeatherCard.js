import { WiRaindrop, WiStrongWind, WiThermometerInternal, WiWindDeg } from "react-icons/wi";

function WeatherEmoji({ description }) {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return '☀️';
      case 'few clouds':
        return '🌤️';
      case 'scattered clouds':
      case 'broken clouds':
        return '☁️';
      case 'shower rain':
        return '🌧️';
      case 'rain':
        return '🌧️';
      case 'thunderstorm':
        return '⛈️';
      case 'snow':
        return '❄️';
      default:
        return '❓'; // You can replace this with a default emoji for unknown conditions
    }
  }
function CurrentWeatherCard(props) {
    return (
      <>
        <div className="cards">
          <div className="weather-card">
            <div className="card-left">
              <p>Current Weather</p>
              <p>
                <WiWindDeg/>
                {props.city}
                </p>
             
                {/* <img src={`http://openweathermap.org/img/w/${props.image}.png`} alt="Weather Icon"></img> */}
                <h3>{props.temp} &deg;C</h3>
              </div>
              <div className="temp"> <span role="img" aria-label="Weather Emoji">
                <WeatherEmoji description={props.description} />
              </span>
              <p>{props.description}</p>
            </div>
            <div className="card-right">
              <p>
                Feels Like <span>{props.feelsLike} &deg;C</span>
              </p>
              <p>
              <WiRaindrop />
                Humidity <span>{props.humidity} %</span>
              </p>
              <p>
                <WiStrongWind />
                Wind <span>{props.wind} m/s</span>
              </p>
              <p>
                <WiThermometerInternal />
                Pressure <span>{props.pressure} hPa</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default CurrentWeatherCard;