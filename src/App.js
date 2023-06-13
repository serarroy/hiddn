import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/main' element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;