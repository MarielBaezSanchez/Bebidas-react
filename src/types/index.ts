import { z } from "zod";
import { CategoriesApiResponseSchema, DrinkSchema, RecipeAPIResponseSchema, RecipesAPIResponseSchema, SearchFiltersSchema } from "../utils/recipes-schema";


export type Categories = z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter = z.infer<typeof SearchFiltersSchema>
export type Recipes = z.infer<typeof RecipesAPIResponseSchema>
export type Drink = z.infer<typeof DrinkSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>