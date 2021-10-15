export const RecipeTags = ["Main", "Breakfast"] as const;
export type RecipeTag = typeof RecipeTags[number];