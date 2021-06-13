import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import './App.css';



function App() {
  return (
    <div className="App">
       <Route exact path='/' component={Landing}/>
       <Route exact path='/home' component={Home}/>
       <Route path= '/home' component={Nav}/>
       <Route path= '/addRecipe' component= {Nav}/>
       <Route exact path='/addRecipe' component={AddRecipe}/>
    </div>
  );
}

export default App;
