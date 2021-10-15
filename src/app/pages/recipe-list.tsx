import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from 'app/models/recipe';

type RecipeListProps = {
    recipes: Recipe[];
};

const RecipeList: React.FC<RecipeListProps> = (props: RecipeListProps) => {

    return (
        <div className="app-page">
            <h1>Recipes</h1>
            {
                props.recipes.map((recipe) => {
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

export default RecipeList;
