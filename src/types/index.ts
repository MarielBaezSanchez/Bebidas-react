import { z } from "zod";
import { CategoriesApiResponseSchema, SearchFiltersSchema } from "../utils/recipes-schema";


export type Categories = z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter = z.infer<typeof SearchFiltersSchema>