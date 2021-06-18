import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail } from '../../Redux/Actions/recipesActions';

function RecipeDetail({match}) {

  const recipe = useSelector((state) => state.recipeById)
  const dispatch = useDispatch(); 

    useEffect(() => {
        console.log("useEffect")
        dispatch(getRecipeDetail(match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    console.log(recipe.diets)

    function summary () {
       return  {__html: recipe.summary};
    }

    return (
        <div>
             <>
      <div className="detailsContainer">
        <h1>{recipe.title} </h1>
        <div className="details">
          <figure className="image">
            <img src={recipe.image} alt="fotuli" />
          </figure>
          <div className="text">
            <div className="diets">
              <h2>Diets</h2>
              <div className ="diets_name" style={{textTransform: 'uppercase'}}>
              {recipe.diets?.map((diet) => (
                  <span key={diet}>
                    <p>
                      {diet}
                    </p>
                  </span>
                ))}   
                
              </div>
            </div>
            <div className="summary">
                <h2>Summary</h2>
            </div>
            <div dangerouslySetInnerHTML={summary()} className="summary_description" />
        
            <div className="instructions">
              <h2>Instructions</h2>
              <p>{recipe.analyzedInstructions?.map((inst) => (
                <ul>
                  <li>{inst}</li>
                  </ul>
              ))}</p>
            </div>
            <div className="scoreDiv">
              <div className="score">
                <h2>Score</h2>
                <p>{recipe.spoonacularScore}</p>
              </div>
              <div className="healthScore">
                <h2>health Score</h2>
                <p>{recipe.healthScore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
        </div>
    )
}
  
  export default RecipeDetail;

