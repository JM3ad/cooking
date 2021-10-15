import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeList from 'app/pages/recipe-list';
import { Recipe } from 'app/models/recipe';

const dummyRecipes = [
    {"name": "Recipe 1"},
    {"name": "Recipe 2"},
    {"name": "Recipe 3"},
];

describe('Recipe List Page', () => {
    const getRecipeListPage = (recipes: Recipe[] = dummyRecipes) => {
        return <Router>
            <RecipeList recipes={recipes} />
        </Router>;
    };

    test('renders title', () => {
        render(getRecipeListPage());
        expect(screen.queryByText("Recipes")).toBeInTheDocument();
    });

    test('renders recipe names for relevant recipes', () => {
        render(getRecipeListPage(dummyRecipes));
        dummyRecipes.forEach((recipe) => {
            expect(screen.queryByText(recipe.name)).toBeInTheDocument();
        });
    });

    test('clicking on a recipe opens that recipes page', async () => {
        render(getRecipeListPage());
        const recipeName = dummyRecipes[1].name;
        const button = screen.getByText(recipeName);
        button.click();
        const urlEncoded = encodeURI(`/recipe/${recipeName}`);
        expect(window.location.pathname).toEqual(urlEncoded);
    });
});