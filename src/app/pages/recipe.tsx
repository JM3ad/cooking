import { Recipe } from 'app/models/recipe';
import React from 'react';

type RecipeProps = {
  recipe: Recipe;
};

const RecipeDisplay: React.FC<RecipeProps> = (props: RecipeProps) => {
  const recipe = props.recipe;

  return (
    <div className="recipe">
        <a href={recipe.url}>{recipe.name}</a>
    </div>
  );
}

export default RecipeDisplay;
