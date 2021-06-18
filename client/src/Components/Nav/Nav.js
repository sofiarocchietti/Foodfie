import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import './Nav.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { searchRecipes } from '../../Redux/Actions/recipesActions';
import logo from '../../img/logo.png'

export default function Nav() {
    const dispatch = useDispatch(); 
    const {searchedRecipes} = useSelector((state) => state)
    const [title, setTitle] = useState("");
    let search = []; 

    if (searchedRecipes.length !== 0) {
        for (let i = 0; i < searchedRecipes.length; i++) {
            search.push(searchedRecipes[i])
        }
    }
   
    /* useEffect(() => {
        dispatch(getRecipes())
    }, [title]) */
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("")
       }

    return (
        <div className='container-nav'>
            <NavLink to= '/home'> <img
                className='nav_logo'
                src= {logo}
                alt='Logo'
               />
               </NavLink>
               <div className='form'> 
           <form onSubmit={((e) => handleSubmit(e))}>
               <input 
               className="box_search"
               name='search'  
               onChange={(e) => setTitle(e.target.value)}
               placeholder="What are you going to eat today?"
               value={title}
               type="text"/>
                  <NavLink to={`/home/${title}`}> 
                   <button className="search_button" type="submit" onClick= {(e) => dispatch(searchRecipes(title))}>
                       <FontAwesomeIcon icon={faSearch}/>
                       </button>
              </NavLink> 
                <NavLink to={`/addRecipe`}>
                <button className="create_button" type="submit">
                       Create Recipe
                       </button>
                </NavLink>
           </form>
           </div>
         {/*  <DisplayRecipes searchedRecipes={search}/>   */}
        </div>
    )
}
