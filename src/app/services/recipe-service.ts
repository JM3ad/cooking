import { allRecipes } from "app/data/recipes";
import { Recipe } from "app/models/recipe";

export const getAllRecipes = (): Recipe[] => {
    return allRecipes;
};

export const getRecipe = (name: string): Recipe => {
    const matchingRecipe = getAllRecipes().filter((recipe) =>
        recipe.name.toLowerCase() === name.toLowerCase()
    );

    if (matchingRecipe.length > 0) {
        return matchingRecipe[0];
    }

    return {
        name: "Test 2",
        url: "http://google.com"
    };
};