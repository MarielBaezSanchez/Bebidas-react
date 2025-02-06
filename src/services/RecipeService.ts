import axios from 'axios';
import { CategoriesApiResponseSchema } from '../utils/recipes-schema';

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