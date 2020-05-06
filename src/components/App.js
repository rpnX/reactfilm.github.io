import React from 'react';
import { Router } from '@reach/router'
import './App.css'

import Header from './elements/Header';
import Home from './Home';
import NotFound from './elements/NotFound'
import Movie from './elements/Movie'


const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Home exact path="/reactfilm/" />
      <Movie path="/reactfilm/:movieId" />
      <NotFound default />
    </Router>
    
  </div>
)

export default App;