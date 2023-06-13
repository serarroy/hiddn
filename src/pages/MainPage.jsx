import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import '../stylesheets/MainPage.css'
import level from '../data';
import {AiFillHeart} from 'react-icons/ai';

const MainPage = () => {
    const [points, setPoints] = useState(0);
    const [correct, setCorrect] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [solution, setSolution] = useState(level[currentQuestion].solution)
    const [correctGuesses, setCorrectGuesses] = useState([]) 
    const [tippedLetters, setTippedLetters] = useState([]);
    const [lives, setLives] = useState([<AiFillHeart />, <AiFillHeart />, <AiFillHeart />, <AiFillHeart />])
    const maskedWord = level[currentQuestion].hiddenWord.split('').map(letter => 
        correctGuesses.includes(letter) ? letter : "_").join(" ");
    const letters = ['A','B','C','D','E','F','G','H','I',
    'J','K','L','M','N','O','P','Q','R',
    'S','T','U','V','W','X','Y','Z']

    useEffect(() => {
        setSolution(level[currentQuestion].solution)
    }, [currentQuestion])
    

    const handleClick = () => {
        setCurrentQuestion(prev => prev + 1);
    }

    const handleGuess = (e) => {
        setCorrect(false);
        setTippedLetters(prev => prev + e.target.value);
        
        if(solution.includes(e.target.value)){
            setCorrectGuesses([...correctGuesses, e.target.value])
            setPoints(prev => prev + 10)
        }
        else{
            setPoints(prev => prev - 10)
            lives.pop();
            if(lives.length === 0){
                setGameOver(true);
            }
        }
        if(!maskedWord.includes("_")){
            setCorrect(true)
            setCorrectGuesses([])
            setTippedLetters([]);
            setCurrentQuestion(prev => prev + 1)
        }
    }
    
    return (
        <div>
            <Header />
            <div className='main-container'>
                <div className='points-timer-container'>
                    <p className='points'>Points: {points}</p>
                    {/*<p>{maskedWord}</p>
                    <p>{solution}</p>*/}
                    <div className='lives-container'>
                    {
                        lives.map((idx, elem) => {
                            return <h1 className='heart' key={idx}>{lives[elem]}</h1>
                        })
                        
                    }
                    </div>
                    <p className='points'># {currentQuestion + 1}</p>
                    {/*<p className='timer'><Timer /></p>*/}
                </div>
                {
                    gameOver? <div className='score-container'>
                            <h1>GAME OVER!!!</h1>
                            <h1>Your score is <b>{points}</b></h1>
                        </div>:(
                        <>
                            <div className='image-container'>
                                {
                                    level[currentQuestion].images.map((elem) => {
                                        return <img className='cell' src={elem} alt='photo'/>
                                    })
                                }
                            </div>
                            <div className='hidden-container'>
                                <div className='hidden'>
                                    <p className='hidden'>{maskedWord}</p>
                                </div>
                            </div>
                            <div className='keyboard'>
                            {
                                letters.map((letter, idx) => {
                                    return  <button
                                        key={idx}
                                        value={letter} 
                                        className='btn' 
                                        disabled={tippedLetters.includes(letter)} 
                                        onClick={handleGuess}
                                    >
                                        {letter}
                                    </button>
                                })
                            }
                            </div>
                            <div>
                                {
                                    correct? <button onClick={handleClick}>Click</button>:null
                                }
                            </div>
                            <div className='tipped-container'>
                                <label className='tipped-span'>Tipped letters:</label>
                                <span className='tipped'>{tippedLetters}</span>
                            </div>
                        </>
                    )
                }
                
            </div>    
        </div>
    )
}

export default MainPage
