import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hourlyforecast from '../components/Hourly/Hourlyforecast';
import FivedayForecast from '../components/Fiveday/Fivedayforecast';

function App() {
  return (
    <Router>
    <div>
    <Routes>
          <Route path="/" element={<Hourlyforecast />} />
          <Route path="/:day" element={<Hourlyforecast />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
