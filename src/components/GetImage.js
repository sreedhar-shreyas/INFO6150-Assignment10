import {Image} from 'react-bootstrap';

function GetImage({ description }) {
    const lowercaseDescription = description ? description.toLowerCase() : '';
    switch (lowercaseDescription) {
      case 'clear sky':
        return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Sun.png" className="weathersize"/>
      case 'few clouds':
      case 'scattered clouds':
        case 'overcast clouds':
      case 'broken clouds':
        return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Clouds.png" className="weathersize" 
        />
      case 'shower rain':
        case 'moderate rain':
        case 'light rain':
      case 'rain':
        return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Rain.png" className="weathersize" 
        />
    case 'mist':
        return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Mist.png" className="weathersize" 
        />
      case 'thunderstorm':
        return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Thunderstorm.png" className="weathersize" 
        />
      case 'snow':
        return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Snow.png" className="weathersize" 
        />
        case 'thunder':
            return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Thunder.png" className="weathersize" 
            />
      default:
        return <Image src="https://raw.githubusercontent.com/sreedhar-shreyas/INFO6150-Assignment5/main/images/Thunder.png" className="weathersize" 
        />
    }
  }

  export default GetImage;