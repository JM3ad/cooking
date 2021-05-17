import React from 'react';
import 'app/pages/Pages.css';
import { Link } from 'react-router-dom';
import { allRecipes } from 'app/models/recipe';

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {
          allRecipes.map((recipe) => {
            return <Link key={recipe.name} to={`/recipe/${recipe.name}`}>{recipe.name}</Link>;
          })
        }
      </header>
    </div>
  );
}

export default Home;
