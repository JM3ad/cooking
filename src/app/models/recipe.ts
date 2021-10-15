import { RecipeTag } from "app/models/recipeTag";

export type Recipe = {
    name: string;
    url?: string;
    ingredients?: string[];
    method?: string[];
    tags?: RecipeTag[];
};