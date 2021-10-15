import { allRecipes } from "app/data/recipes";
import { Recipe } from "app/models/recipe";
import { RecipeTag } from "app/models/recipeTag";

const TAG_ALL_RECIPES = "All";

export const getAllTags = (): string[] => {
    const tags = Object.values(RecipeTag).map((tag) => <string> tag);
    tags.unshift(TAG_ALL_RECIPES);
    return tags;
};

export const getRecipes = (tag: string): Recipe[] => {
    if (tag === TAG_ALL_RECIPES) {
        return getAllRecipes();
    }
    return getAllRecipes().filter((recipe) => {
        console.log(tag);
        const recipeTag = <RecipeTag><unknown> tag;
        return recipe.tags && recipe.tags.includes(recipeTag);
    })
};

export const getAllRecipes = (): Recipe[] => {
    return allRecipes;
};

export const getRecipe = (name: string): Recipe | null => {
    const matchingRecipe = getAllRecipes().filter((recipe) =>
        recipe.name.toLowerCase() === name.toLowerCase()
    );

    if (matchingRecipe.length > 0) {
        return matchingRecipe[0];
    }

    return null;
};