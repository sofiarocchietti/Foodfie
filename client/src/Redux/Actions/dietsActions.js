export const GET_DIETS = 'GET_DIETS';
export const DIET_FILTER = 'DIET_FILTER'; 

  
export function getDiets() {
    return function (dispatch) {
      return fetch('http://localhost:5000/types')
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_DIETS, payload: json });
        });
    };
  }
  
  export function dietFilter(payload) {
    return {
      type: DIET_FILTER,
      payload: payload,
    };
  }