import React from 'react';
import { Card} from 'react-bootstrap';
import GetImage from '../GetImage';

function OneMoreCard(props) {
  return (
    <div className='hourname'>
    <Card className="mb-4 shadow">
      <Card.Body>
       <h3> <Card.Text>{props.time}</Card.Text> </h3>
        <Card.Text> <span role="img" aria-label="Weather Emoji">
              <GetImage description={props.desc} />
            </span></Card.Text>
        <Card.Text> {props.desc}</Card.Text>
        <Card.Text>Temperature: {props.temp} &deg;C</Card.Text>
        <Card.Text>Max Temperature: {props.max} &deg;C</Card.Text>
        <Card.Text>Min Temperature: {props.min} &deg;C</Card.Text>
        <Card.Text>Humidity: {props.humidity} %</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
  
}

export default OneMoreCard;
