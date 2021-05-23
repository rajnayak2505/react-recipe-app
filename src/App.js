import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Breakfast from './components/Breakfast';
import LunchDinner from './components/LunchDinner';
import Snack from './components/Snack';
import Juice from './components/Juice';
import Shakes from './components/Shakes';
import HomePage from './components/HomePage';
import DetailRecipe from './components/DetailRecipe';
import RelatedRecipe from './components/RelatedRecipe';
// import Recipe from './Recipe';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/breakfast' component={Breakfast}  />
        <Route path='/lunch-dinner' component={LunchDinner}  />
        <Route path='/snack' component={Snack}  />
        <Route path='/juices' component={Juice}  />
        <Route path='/shakes' component={Shakes}  />
        <Route path='/recipe/:id' component={DetailRecipe} exact />
      </Switch>
      {/* <RelatedRecipe /> */}
    </Router>
  );
};

export default App;
