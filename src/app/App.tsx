import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from 'app/pages/home';
import RecipeDisplay from 'app/pages/recipe';
import { getRecipe, getRecipes } from 'app/services/recipe-service';
import RecipeGenerator from 'app/pages/recipe-generator';
import PageNotFound from 'app/pages/page-not-found';
import NavBar from 'app/components/nav-bar';
import UsefulCharts from 'app/pages/useful-charts';
import 'styles/Pages.scss';
import { NavBarLinks } from 'app/data/nav-bar-links';
import RecipeList from './pages/recipe-list';

const App: React.FC = () => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
        history.replaceState(null, process.env.REACT_APP_BASE_URL || '', redirect);
    }

    return (
        <Router basename={process.env.REACT_APP_BASE_URL}>
            <NavBar links={NavBarLinks}/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/recipes/:tag" render={(props)=>{
                    const recipes = getRecipes(props.match.params.tag);
                    if (!recipes) {
                        return <PageNotFound />;
                    }
                    const sortedRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name));
                    return <RecipeList recipes={sortedRecipes}/>}
                } />
                <Route path="/recipe/:recipeId" render={(props)=>{
                    const recipe = getRecipe(props.match.params.recipeId);
                    if (!recipe) {
                        return <PageNotFound />;
                    }

                    return <RecipeDisplay recipe={recipe}/>}
                } />
                <Route path="/recipe-generator/:recipeId?" render={(props)=>{
                    const recipeId = props.match.params.recipeId
                    const recipe = recipeId ? getRecipe(recipeId) : null;
                    return <RecipeGenerator recipe={recipe}/>}
                } />
                <Route path="/useful-charts">
                    <UsefulCharts />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
