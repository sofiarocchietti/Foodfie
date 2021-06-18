import React from 'react'
import { Link } from 'react-router-dom'
import background4 from '../../img/background4.jpg'
import './RecipeContainer.css'

export default function RecipeContainer (props) {

console.log('recipeContainer y la concha de tu madre', props.recipe)
  return (
    <div className='card_container'>
         <div className='image'>  
         <img src={props.recipe.image ? props.recipe.image : `${background4} `} alt="fotuli" />
         </div>
             <h1 className='card_title'>{ props.recipe.title}</h1>
                {props.recipe.diets?.map((diet, index) => (
                  <span key={index}>
                    <p>
                      {diet} 
                    </p>
                  </span>
                ))}   
             <Link to={`/recipe/${props.recipe.id}`}>
             <button type='submit'>
               Read More
             </button>
             </Link>
    </div>
  )
}
