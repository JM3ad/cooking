import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from 'app/pages/home';
import RecipeDisplay from 'app/pages/recipe';
import { getRecipe } from 'app/models/recipe';
import 'app/App.scss';

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
        <Link to="/">Home</Link>
      </div>

      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipe/:recipeId" render={(props)=><RecipeDisplay recipe={getRecipe(props.match.params.recipeId)}/>} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
