import DailyForecast from '../components/Daily/DailyForecast';
import HourForecast from '../components/Fivehourforecast/HourForecast';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>

    <Routes>
          <Route path="/" element={<DailyForecast />} />
          <Route path="/:day" element={<HourForecast />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
   
  </Router>
  );
}

export default App;
