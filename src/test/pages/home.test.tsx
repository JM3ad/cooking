import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from 'app/pages/home';
import { RecipeTags } from 'app/models/recipeTag';

describe('Home Page', () => {
    const getHomePage = () => {
        return <Router>
            <Home />
        </Router>;
    };

    test('renders title', () => {
        render(getHomePage());
        expect(screen.queryByText("Categories")).toBeInTheDocument();
    });

    // This test only checks up to 3 recipes
    // to avoid caring about any recipes that aren't yet on screen
    test('renders option for all recipes', () => {
        render(getHomePage());
        expect(screen.queryByText("All")).toBeInTheDocument();
    });

    test('clicking on a category opens that category page', async () => {
        render(getHomePage());
        const categoryName = RecipeTags[0];
        const button = screen.getByText(categoryName);
        button.click();
        const urlEncoded = encodeURI(`/recipes/${categoryName}`);
        expect(window.location.pathname).toEqual(urlEncoded);
    });
});