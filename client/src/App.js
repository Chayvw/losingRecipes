import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './componets/Home';
import NoMatch from './componets/NoMatch';
import Ingredients from './componets/Ingredients';
import Search from './componets/Search';
import NewIngredient from './container/NewIngredient';

function App() {
  // axios call to check if my front end is connected to my backend
  // useEffect(() => {
  //   axios.get("/api/config").then((response) => {
  //     console.log(response.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/ingredients' component={Ingredients} />
          <Route path='/newingredient' component={NewIngredient} />
          <Route path='/search' component={Search} />
          <Route path='/nomatch' component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
