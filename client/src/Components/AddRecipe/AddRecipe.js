import {React, useState} from 'react';
import { validate } from './Error';
import { connect } from 'react-redux'; 


export function AddRecipe () {

  const [input, setInput] = useState({
    name: '',
    summary: '',
    spoonacularScore: '',
    healthScore: '',
    analyzedInstructions: ''
 })
 const [errors, setErrors] = useState({});

 const handleInputChange = function(e) {
  //Se fija en quien dispara el cambio y al ser dinámico setea una propiedad u otra.
  setInput({
    ...input,   //Traete todo el objeto y solo modifica el valor que se indique. 
    [e.target.name]: e.target.value //El "e" es el objeto que se dispara con el evento. El e.target devuelve lo que disparó el evento, la propiedad nombre de este objeto hace referencia a lo que yo le pase abajo, el value es lo que tengo escrito. ENTRE CORCHETES PORQUE ES UNA PROPIEDAD DINAMICA DEL OBJETO E. 
  });

  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
}

 const handleSubmit = (e) => {
  e.preventDefault()
 }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
        </label>
        <input name='Name' onChange={handleInputChange} value={input.name}/>
        <label>
          Description
        </label>
        <textarea name = "Summary" onChange={handleInputChange} value={input.summary}/>
        <label>
          Spoonacular Score
        </label>
        <input name='SpoonacularScore' onChange={handleInputChange} value={input.spoonacularScore}/>
        <label>
          Health Score
        </label>
        <input name='HealthScore' onChange={handleInputChange} value={input.healthScore}/>
        <label>
            Analyzed Instructions 
        </label>
        <textarea name = "AnalyzedInstructions" onChange={handleInputChange} value={input.analyzedInstructions}/>
        <button type = "submit">Create</button>
      </form>
    </div>
  )
}

/* const mapDispatchToProps = (dispatch) => {
  return {
  addTodo: (todo) => dispatch(addTodo(todo))
  }
} */

export default AddRecipe; /* connect(null, mapDispatchToProps)(AddTodo) */