/*import React, { useEffect, useState } from 'react';

export default function Hangman({duration = 120000}) {
    const word = "Hangman".toUpperCase();
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimeUp(true);
        }, duration);

        return () => clearTimeout(timeout);
    }, [])


    const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");
    return (
        <div>
            <p>{maskedWord}</p>
            {alphabets.map((alphabet, index) => <button key={index} onClick={() => {
                if (word.includes(alphabet)) {
                    setCorrectGuesses([...correctGuesses, alphabet])
                }
            }}>{alphabet}</button>)}
            {timeUp ? 
            <p>You lost!</p> : 
            !maskedWord.includes("_") &&  <p>You won!</p>}
        </div>
    );
}*/
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