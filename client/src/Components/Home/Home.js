import {React, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/Actions/recipesActions';
import { reset } from '../../Redux/Actions/orderActions';
import Pagination  from '../Pagination/Pagination';
import FilterOptions from '../FilterOptions/FilterOptions';
import DisplayRecipes from '../DisplayRecipes/DisplayRecipes';
import SearchRecipes from '../SearchRecipes/SearchRecipes';
import Nav from '../Nav/Nav';
import './Home.css'

function Home() {
  const {recipes} = useSelector((state) => state);
  const {filteredRecipes} = useSelector((state) => state);
  const {searchedRecipes} = useSelector((state) => state)
  const {filterBy} = useSelector((state) => state);
  const {orderBy} = useSelector((state) => state);
  let allRecipes;


    const [page, setPage] = useState(1);
    const [recipesPerPage] = useState(9);

 const dispatch = useDispatch()
    /* useEffect(() => {
        if(recipes.length > 0) return  
       dispatch(getRecipes())
       // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); */
     

      if(filterBy === 'All' && orderBy === 'Select') {
           allRecipes = recipes.slice()
      } else {
           allRecipes = filteredRecipes.slice()
      }
      // Pagination

  let indexLastPage = page * recipesPerPage;
  // indice del último elemento de cada pagina
  let indexFirtsPage = indexLastPage - recipesPerPage;
  // indice del primer elemento de cada pagina
  let currentPage = allRecipes.slice(indexFirtsPage, indexLastPage);
  // recipes de la pagina actual

  // Change Page

  function paginate(e, num) {
    e.preventDefault();
    setPage(num); // Seteo el número de página
  }

    return (
        <div className="homePage">
      <div className="title">
        <h2>All Recipes</h2>
      </div>
      <div className="container">
          <>
          <Nav /> 
            <FilterOptions />
            <Pagination
              recipePerPage={recipesPerPage} // 9
              totalRecipes={allRecipes.length} 
              paginate={paginate} // function
            />
            <DisplayRecipes recipes={currentPage} />
            {/* <SearchRecipes recipes={searchedRecipes} />  */}
          </>
      </div>
    </div>
    )
}


/* const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        filteredRecipes: state.filteredRecipes,
        filterBy: state.filterBy,
        orderBy: state.orderBy
    }
} */


export default Home; 
