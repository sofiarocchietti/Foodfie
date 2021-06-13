import { GET_RECIPES, GET_RECIPES_DETAIL} from '../Actions/recipesActions';
import { GET_DIETS, DIET_FILTER } from '../Actions/dietsActions';
import { ORDER_BY } from '../Actions/orderActions';
import { orderMinToMax, orderMaxToMin, orderAsc, orderDesc } from '../../../utils';

const initialState = {
    diets : [],
    recipes: [],
    recipeById: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
      //RECIPES:
        case GET_RECIPES: {
          return {
            ...state,
            recipes: action.payload,
          }
        }
        case GET_RECIPES_DETAIL: {
          return {
            ...state,
           recipeById: action.payload,
          }
        }
        //DIETS: 
        case GET_DIETS: {
          let filteredDiets = action.payload.map((diet) => {
            return diet.name;
          })
          return {
            ...state,
            diets: filteredDiets
          }
        }
        case DIET_FILTER: {
          let dietFilter = [];
          for(let i = 0; i < state.recipes.length; i++) {
            const recipe = state.recipes[i]
            for(let d = 0; d < state.recipes.length; i++) {
              const diet = recipe.diets[d];
              if( diet.name === action.payload) {
                dietFilter.push(recipe)
              }
            }
          }
          return {
            ...state,
            recipes: [...dietFilter]
          }
        }
        //ORDER:
        case ORDER_BY: {
          let order = [...state.recipes]

          if (action.payload === 'asc') {
            order.sort(orderAsc);
            return {
              ...state,
              recipes: [...order],
            };
          } else if (action.payload === 'desc') {
            order.sort(orderDesc);
            return {
              ...state,
              recipes: [...order],
            };
          } else if (action.payload === 'max') {
            order.sort(orderMaxToMin);
            return {
              ...state,
              recipes: [...order],
            };
          } else if (action.payload === 'min') {
            order.sort(orderMinToMax);
            return {
              ...state,
              recipes: [...order],
            };
          } else {
            return state;
          }
        }
        default:
         return state 
    }
}

export default rootReducer; 