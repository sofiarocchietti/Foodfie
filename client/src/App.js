import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import './App.css';


function App() {
  return (
    <div className="App">
       <Route exact path='/' component={Landing} />
    </div>
  );
}

export default App;
