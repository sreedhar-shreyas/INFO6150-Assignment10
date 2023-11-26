import { useNavigate } from 'react-router-dom';
import "../Styles/Styles.css"
import { Card } from 'react-bootstrap';
import GetImage from '../GetImage';

function ForecastWeatherCard(props) {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/${props.day}`);
    };
    return (
        <>
            <Card className="weather-card" onClick={handleCardClick}>
                <Card.Body>
                    <Card.Title>{props.day}</Card.Title>
                    <Card.Text> <span role="img" aria-label="Weather Emoji">
              <GetImage description={props.forecast} />
            </span></Card.Text>
                    <Card.Text>{props.forecast}</Card.Text>
                    <Card.Text>{props.max} &deg;C / {props.min} &deg;C</Card.Text>
                </Card.Body>
            </Card>
        </>);
}

export default ForecastWeatherCard  