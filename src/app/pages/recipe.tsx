import { Recipe } from 'app/models/recipe';
import React from 'react';
import 'app/pages/Pages.scss';

type RecipeProps = {
  recipe: Recipe;
};

type IngredientsProps = {
  ingredients?: string[];
}

type MethodProps = {
  method?: string[];
}

const IngredientsDisplay: React.FC<IngredientsProps> = (props: {ingredients?: string[]}) => {
  if (!props.ingredients) {
    return null;
  }
  return <>
    <h2>Ingredients</h2>
    <ul>
      {
        props.ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>
        })
      }
    </ul>
  </>;
};

const MethodDisplay: React.FC<MethodProps> = (props: {method?: string[]}) => {
  if (!props.method) {
    return null;
  }
  return <>
    <h2>Method</h2>
    <ul>
      {
        props.method.map((step) => {
          return <li key={step}>{step}</li>
        })
      }
    </ul>
  </>;
};

const RecipeDisplay: React.FC<RecipeProps> = (props: RecipeProps) => {
  const recipe = props.recipe;

  return (
    <div className="app-page">
      <div className="recipe">
          <a href={recipe.url} className="recipe-link">Link to {recipe.name}</a>
          <IngredientsDisplay ingredients={recipe.ingredients} />
          <MethodDisplay method={recipe.method} />
      </div>
    </div>
  );
}

export default RecipeDisplay;
