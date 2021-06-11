import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'

function Landing() {
    return (
        <div className='landing-container'>
           
            <h1>HOLA LANDING</h1>
            <button className='button_home'><Link to='/home' className='link_text'> HOME  </Link></button>
        </div>
    )
}

export default Landing

