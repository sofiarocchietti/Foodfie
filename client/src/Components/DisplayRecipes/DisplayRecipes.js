import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/Actions/recipesActions';
import './DisplayRecipes.css';
import RecipeContainer from '../RecipeContainer/RecipeContainer.js';

function DisplayRecipes({recipes}) {
  /* const {recipes} = useSelector(state => state)
  const dispatch = useDispatch()
    useEffect(() => {
      
       dispatch(getRecipes())
       
       
      }, []); */  
      
   console.log('display', recipes.length) 
      /* console.log(recipes[100]) */
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
