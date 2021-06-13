import {React, useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'
import logo from '../../img/logo.png'

export default function Nav() {
    const [input, setInput] = useState({
        search: ''
    });
    const handleInputChange = function(e) {
        //Se fija en quien dispara el cambio y al ser dinámico setea una propiedad u otra.
        setInput({
          ...input,   //Traete todo el objeto y solo modifica el valor que se indique. 
          [e.target.name]: e.target.value //El "e" es el objeto que se dispara con el evento. El e.target devuelve lo que disparó el evento, la propiedad nombre de este objeto hace referencia a lo que yo le pase abajo, el value es lo que tengo escrito. ENTRE CORCHETES PORQUE ES UNA PROPIEDAD DINAMICA DEL OBJETO E. 
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       }

    return (
        <div className='container-nav'>
            <NavLink to= '/home'> <img
                className='nav_logo'
                src= {logo}
                alt='Logo'
               />
               </NavLink>
           <form onSubmit={handleSubmit}>
               <div className='form'> 
               <input name='search' onChange={handleInputChange} value={input.search}/>
               <button type = "submit">search</button>
           </div>
           </form>
        </div>
    )
}
