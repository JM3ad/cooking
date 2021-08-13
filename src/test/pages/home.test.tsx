import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from 'app/pages/home';
import { getAllRecipes } from 'app/services/recipe-service';

describe('Home Page', () => {
    const getHomePage = () => {
        return <Router>
            <Home />
        </Router>;
    };

    test('renders title', () => {
        render(getHomePage());
        expect(screen.queryByText("Recipes")).toBeInTheDocument();
    });

    // This test only checks up to 3 recipes
    // to avoid caring about any recipes that aren't yet on screen
    test('renders at least first three recipes', () => {
        render(getHomePage());
        getAllRecipes().slice(0, 3).forEach((recipe) => {
            expect(screen.queryByText(recipe.name)).toBeInTheDocument();
        });
    });

    test('clicking on a recipe opens that recipes page', async () => {
        render(getHomePage());
        if (getAllRecipes().length === 0) return;
        const firstRecipe = getAllRecipes()[0];
        const button = screen.getByText(firstRecipe.name);
        button.click();
        const urlEncoded = encodeURI(`/recipe/${firstRecipe.name}`);
        expect(window.location.pathname).toEqual(urlEncoded);
    });
});