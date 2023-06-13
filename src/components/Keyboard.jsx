import React, {useState} from 'react'
import '../stylesheets/Keyboard.css'



const Keyboard = ({level, solution}) => {

    const letters = ['A','B','C','D','E','F','G','H','I',
                    'J','K','L','M','N','O','P','Q','R',
                    'S','T','U','V','W','X','Y','Z']

    const [tippedLetters, setTippedLetters] = useState([]);
    const [correctGuesses, setCorrectGuesses] = useState([]);

    const handleGuess = (e) => {
        setTippedLetters(prev => prev + e.target.value);
        if(solution.includes(e.target.value)){
            setCorrectGuesses([...correctGuesses, e.target.value])
        }
    }

    return (
        <div>
            {
                letters.map((letter, idx) => {
                    return  <button
                                key={letter}
                                value={letter} 
                                className='letter-btn' 
                                disabled={tippedLetters.includes(letter)} 
                                onClick={handleGuess}
                                >
                                    {letter}
                            </button>
                })
            }
            <div className='tipped-container'>
                <span className='tipped-span'>Tipped letters:</span>
                <span className='tipped'>{tippedLetters}</span>
                {/*<span>Correct letters: </span>
                <span>{correctGuesses}</span>*/}
            </div>
        </div>
    )
}

export default Keyboard
