import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from 'app/pages/home';
import RecipeDisplay from 'app/pages/recipe';
import 'app/App.scss';
import homeIcon from 'app/home.svg';
import { getRecipe } from './services/recipe-service';
import RecipeGenerator from './pages/recipe-generator';

const App: React.FC = () => {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, process.env.REACT_APP_BASE_URL || '', redirect);
  }

  return (
  <Router basename={process.env.REACT_APP_BASE_URL}>
    <div>
      <div className="nav-bar">
        <Link to="/">
          <img src={homeIcon} className="home-icon" alt="Home icon" />
        </Link>
        <Link to="/recipe-generator">
          <img src={homeIcon} className="home-icon" alt="Home icon" />
        </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipe/:recipeId" render={(props)=><RecipeDisplay recipe={getRecipe(props.match.params.recipeId)}/>} />
        <Route path="/recipe-generator">
          <RecipeGenerator />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
