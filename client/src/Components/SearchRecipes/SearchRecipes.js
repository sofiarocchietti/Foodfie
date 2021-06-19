import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchRecipes } from '../../Redux/Actions/recipesActions';
import { reset } from '../../Redux/Actions/orderActions';
import FilterOptions from '../FilterOptions/FilterOptions';
import DisplayRecipes from '../DisplayRecipes/DisplayRecipes';


function SearchRecipes({props, match}) {
    const dispatch = useDispatch(); 

    console.log(props); 

    const {recipes} = useSelector(state => state );
    const {filteredRecipes} = useSelector(state => state );
    const {filterBy} = useSelector(state => state );
    const {orderBy} = useSelector(state => state );
    let allRecipes;

    if(filterBy === 'All' && orderBy === 'Select') {
        allRecipes = recipes.results? recipes.results.slice() : recipes.slice()
   } else {
        allRecipes = filteredRecipes.slice()
   }


    //Setear Loading

    const [loading, setLoading] = useState(true);

    //Use effect, uso reset? Agregar dependencia de name

    useEffect(()=> {
        dispatch(searchRecipes(props.recipe.title));
        dispatch(reset())
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.recipe.title]); 

    return (
        <>
            {loading? (
                <div className = "loading"> 
                    <h2> Loading... </h2>
                 </div>
            ) : (
                <>
                <FilterOptions />
                <DisplayRecipes recipes={allRecipes} />
                </>
            )
        }
        </>
    )
}

export default SearchRecipes
