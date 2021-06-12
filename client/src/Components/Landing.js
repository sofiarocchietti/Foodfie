import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'

function Landing() {
    return (
        <div className='landing_container'>
            <h1 className= 'welcome_text'>Welcome!</h1>
            <button className='button_home'><Link to='/home' className='link_text'> HOME  </Link></button>
        </div>
    )
}

export default Landing

