import React from 'react'
import Header from '../components/Header'
import '../stylesheets/AboutPage.css'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className='about-container'>
                <h1 className='about-title'>About the game</h1>
                <p className='about-paragraph'>The goal of this game is to find the feature the 4 pictures have in common (the <b>hiddn</b> word) and write it underneath it to unlock the next level. Each hit will give you 10 points and each failure will subtract them. You have <b>4</b> lives to achieve it</p>
            </div>
            <div className='container'>
                <button className='about-btn' onClick={() => navigate('/')}>Go back!!</button>
            </div>
        </div>
    )
}

export default AboutPage
