import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/Actions/recipesActions';
import { reset } from '../../Redux/Actions/orderActions';
import Pagination  from '../Pagination/Pagination';
import FilterOptions from '../FilterOptions/FilterOptions';
import DisplayRecipes from '../DisplayRecipes/DisplayRecipes';

import Nav from '../Nav/Nav';
import './Home.css'
import { getDiets } from '../../Redux/Actions/dietsActions';

function Home() {
  const {recipes} = useSelector((state) => state);
  const {filteredRecipes} = useSelector((state) => state);
  const {filterBy} = useSelector((state) => state);
  const {orderBy} = useSelector((state) => state);

   const [allRecipes, setAllRecipes] = useState([])
    const [page, setPage] = useState(1);
    const [recipesPerPage] = useState(9);



  const dispatch = useDispatch() 
    useEffect(() => {
       if(filterBy === 'All' && orderBy === 'Select') {
        setAllRecipes(recipes.results? recipes.results.slice() : recipes.slice())
    } else {
        setAllRecipes(filteredRecipes.slice())
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [filterBy, orderBy, recipes]);  

     /*  useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets())
      },[]) */
     
      console.log(recipes)
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
      <div className="container">
          <>
          <Nav /> 
            <FilterOptions />
            <DisplayRecipes recipes={currentPage}/>
            <Pagination
              recipePerPage={recipesPerPage} // 9
              totalRecipes={allRecipes.length} 
              paginate={paginate} // function
            />
          </>
      </div>
    </div>
    )
}


export default Home; 
