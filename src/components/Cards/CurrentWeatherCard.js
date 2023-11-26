import { WiRaindrop, WiStrongWind, WiThermometerInternal } from "react-icons/wi";
import { Card, Container, Row, Col } from 'react-bootstrap';
import GetImage from '../GetImage';

// import test from "../../Images/."

function CurrentWeatherCard(props) {
    return (
      <>
        <Card fluid className="bg-light p-4">
      <Container>
        <Row>
          <Col>
            <h1> {props.city} Current Weather
            </h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="card-left">
            <h1>{props.temp} &deg;C</h1>
          </Col>
          <Col className="temp">
            <span role="img" aria-label="Weather Emoji">
              <GetImage description={props.description} />
            </span>
            <p>{props.description}</p>
          </Col>
          <Col className="card-right">
            <p>
              Feels Like <span class="font-weight-bold">{props.feelsLike} &deg;C</span>
            </p>
            <p>
              <WiRaindrop />
              Humidity <span className="font-weight bold">{props.humidity} %</span>
            </p>
            <p className="font-weight bold">
              <WiStrongWind />
              Wind: <span className="font-weight bold">{props.wind} m/s</span>
            </p>
            <p>
              <WiThermometerInternal />
              Pressure <span className="font-weight bold" >{props.pressure} hPa</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Card>
      </>
    );
  }
  

  export default CurrentWeatherCard;