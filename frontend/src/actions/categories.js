export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategoriesAction(categories){
  return{
    type: GET_CATEGORIES,
    categories
  }
}