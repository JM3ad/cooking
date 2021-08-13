import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from 'app/pages/home';
import RecipeDisplay from 'app/pages/recipe';
import { getRecipe } from './services/recipe-service';
import RecipeGenerator from './pages/recipe-generator';
import PageNotFound from './pages/page-not-found';
import NavBar from './components/nav-bar';
import UsefulCharts from './pages/useful-charts';
import 'styles/Pages.scss';

const App: React.FC = () => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
        history.replaceState(null, process.env.REACT_APP_BASE_URL || '', redirect);
    }

    return (
        <Router basename={process.env.REACT_APP_BASE_URL}>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/recipe/:recipeId" render={(props)=>{
                    const recipe = getRecipe(props.match.params.recipeId);
                    if (!recipe) {
                        return <PageNotFound />;
                    }

                    return <RecipeDisplay recipe={recipe}/>}
                } />
                <Route path="/recipe-generator/:recipeId" render={(props)=>{
                    const recipe = getRecipe(props.match.params.recipeId);
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
