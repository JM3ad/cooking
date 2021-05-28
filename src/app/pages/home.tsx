import React from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from 'app/services/recipe-service';


const Home: React.FC = () => {
    const allRecipes = getAllRecipes();

    return (
        <div className="app-page">
            <h1>Recipes</h1>
            {
                allRecipes.map((recipe) => {
                    return <Link
                        className="recipe-link"
                        key={recipe.name}
                        to={`/recipe/${recipe.name}`}
                    >
                        {recipe.name}
                    </Link>;
                })
            }
        </div>
    );
}

export default Home;
