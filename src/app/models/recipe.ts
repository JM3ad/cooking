export type Recipe = {
    name: string;
    url: string;
};

export const getRecipe = (name: string): Recipe => {
    const matchingRecipe = allRecipes.filter((recipe) =>
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

export const allRecipes: Recipe[] = [
    {
        name: "Bibimbap",
        url: "https://www.lazycatkitchen.com/vegan-bibimbap/"
    }
];