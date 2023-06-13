import React from 'react'
import '../stylesheets/LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='title'>HIDDN</h1>
            <div className='container'>
                <button className='landing-btn' onClick={() => navigate('/main')}>Play</button>
                <button className='landing-btn' onClick={() => navigate('/about')}>About</button>
            </div>
        </div>
    )
}

export default LandingPage
