import axios from 'axios';
import { CategoriesApiResponseSchema, RecipesAPIResponseSchema } from '../utils/recipes-schema';
import { SearchFilter } from '../types';

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios.get(url)
    const result = CategoriesApiResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    } else {
        throw new Error('Error fetching categories')
    }
}

export async function getRecipes(filters: SearchFilter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?`
    const { data } = await axios(`${ url }c=${ filters.category }&i=${ filters.ingredient }`)
    const result = RecipesAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}