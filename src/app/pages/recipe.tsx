import { Recipe } from 'app/models/recipe';
import React from 'react';
import 'app/pages/Pages.scss';

type RecipeProps = {
  recipe: Recipe;
};

const RecipeDisplay: React.FC<RecipeProps> = (props: RecipeProps) => {
  const recipe = props.recipe;

  return (
    <div className="app-page">
      <div className="recipe">
          <a href={recipe.url} className="recipe-link">Link to {recipe.name}</a>
          {recipe.ingredients ?
            <>
              <h2>Ingredients</h2>
              <ul>
                {
                  recipe.ingredients?.map((ingredient) => {
                    return <li key={ingredient}>{ingredient}</li>
                  })
                }
              </ul>
            </>
            : null
          }
          {recipe.method ?
            <>
              <h2>Method</h2>
              <ul>
                {
                  recipe.method?.map((method) => {
                    return <li key={method}>{method}</li>
                  })
                }
              </ul>
            </>
            : null
          }
      </div>
    </div>
  );
}

export default RecipeDisplay;
