import { useNavigate } from 'react-router-dom';

function ForecastWeatherCard(props) {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/${props.day}`);
    };
    return (
        <>
            <div className="ext-card" onClick={handleCardClick}>
                <h5>{props.day}</h5>
                <img src={props.image} alt="weather-icon"></img>
                <h5>{props.forecast}</h5>
                <p>{props.max} &deg;C/{props.min} &deg;C</p>
            </div>
        </>);
}

export default ForecastWeatherCard