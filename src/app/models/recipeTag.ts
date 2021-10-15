export const RecipeTags = ["Main", "Breakfast", "Dessert", "Soup"] as const;
export type RecipeTag = typeof RecipeTags[number];