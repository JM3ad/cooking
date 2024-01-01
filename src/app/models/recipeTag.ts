export const RecipeTags = ["Main", "Breakfast", "Dessert", "Soup", "Side"] as const;
export type RecipeTag = typeof RecipeTags[number];