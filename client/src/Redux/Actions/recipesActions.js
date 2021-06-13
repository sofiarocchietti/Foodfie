export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_DETAIL = 'GET_RECIPES_DETAIL';


export function getRecipes (name) {
  return function (dispatch) {
    return fetch('http://localhost:5000/recipes?name=' + name)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        dispatch({ type: GET_RECIPES, payload: json.results })
      })
  }
}

export function getRecipeDetail(id) {
    return function (dispatch) {
      return fetch('http://localhost:5000/recipes/' + id)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_RECIPES_DETAIL, payload: json });
        });
    };
  }

 

