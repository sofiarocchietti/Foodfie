import React from 'react';
import './DisplayRecipes.css';
import RecipeContainer from '../RecipeContainer/RecipeContainer.js';

function DisplayRecipes({recipes}) {
      
   console.log('display', recipes.length) 
 
    return (
        <div className='display_recipes'>
          {recipes.map((recipe, index) => 
          (
            <RecipeContainer index={index} recipe={recipe}/>
          ))}
        </div>
    );
}

export default DisplayRecipes
