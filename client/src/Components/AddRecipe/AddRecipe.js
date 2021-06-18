import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe } from '../../Redux/Actions/recipesActions';
import { getDiets } from '../../Redux/Actions/dietsActions';
import './AddRecipe.css'
import { validate } from './Error';



export function AddRecipe () {

  const dispatch = useDispatch();
  const {diets} = useSelector(state=>state)

  useEffect(() => { 
    dispatch(getDiets());
    // eslint-disable-next-line
  }, []);

  const [input, setInput] = useState({
    title: '',
    summary: '',
    spoonacularScore: 0,
    healthScore: 0, 
    analyzedInstructions: '',
    diets: []
 }); 

 const [errors, setErrors] = useState({}); 

 const handleInputChange = function(e) {
  if(e.target.name === "diets") {
    const dietsSelection = input[e.target.name]
    setInput({
      ...input,
      [e.target.name]: dietsSelection.concat(e.target.value)
    })
  } else {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
}

 const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(createRecipe(input))
  setInput({
    title: '',
    summary: '',
    spoonacularScore: 0,
    healthScore: 0, 
    analyzedInstructions: '',
    diets: []
    })
 }
 
  return (
    <div className="add_recipe_container">
     <h1 className="h1_title">Recipe Creator: </h1>
     <form
     className="recipe_form"
     onSubmit={(e) => handleSubmit(e)}
     >
       <div>
            <label className="text_title_form">Title</label>
            <input
              onChange={handleInputChange}
              className={`${errors.title && "danger"}`}
              type="text"
              name="title"
              value={input.title}
            />
            {errors.title && (
              <p className="danger">{errors.title}</p>
                )} 
          </div>
          <div>
            <label className="text_title_form">Summary</label>
            <textarea
            onChange={handleInputChange}
            className={`${errors.summary && "danger"}`}
              type="text"
              name="summary"
              value={input.summary}
            />
            {errors.summary && (
              <p className="danger">{errors.summary}</p>
                )} 
          </div>
          <div>
            <label className="text_title_form">Score</label>
            <input
            onChange={handleInputChange}
            className={`${errors.spoonacularScore && "danger"}`}
              type="number"
              min="0"
              max="99"
              name="spoonacularScore"
              value={input.spoonacularScore}
            />
            {errors.spoonacularScore && (
              <p className="danger">{errors.spoonacularScore}</p>
                )} 
            <div>
            <label className="text_title_form">Health Score</label>
            <input
            onChange={handleInputChange}
            className={`${errors.healthScore && "danger"}`}
              type="number"
              min="0"
              max="99"
              name="healthScore"
              value={input.healthScore}
            />
             {errors.healthScore && (
              <p className="danger">{errors.healthScore}</p>
                )} 
          </div>
          <div>
            <label className="text_title_form">Instructions</label>
            <textarea
            onChange={handleInputChange}
              className="text_input"
              type="text"
              name="analyzedInstructions"
              value={input.analyzedInstructions}
            ></textarea>
          </div>
          <div className="diets_checkbox">
          <label className="text_title_form">Choose your diets</label>
            <div className="map_diets">
              {diets.map((diet) =>
              <span className="keys" key={diet.name}>
                <input
                    className="input"
                    type="checkbox"
                    name="diets"
                    value={diet.id}
                  ></input>
                  <label name={diet}>{diet.name}</label>
                </span>
              )
              }
              </div> 
            </div>
          </div>
          <button className="submitForm" type="submit">
          Submit
        </button>
     </form>
    </div>
  )
}



export default AddRecipe; 