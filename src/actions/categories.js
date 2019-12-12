import { saveCategory } from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECIEVE_CATEGORIES'
export const ADD_CATEGORY = 'ADD_CATEGORY'

function addCategory (category) {
  return {
    type: ADD_CATEGORY,
    category,
  }
}

export function handleAddCategory (category) {
  return (dispatch, getState) => {
    return saveCategory(category)
      .then((category) => dispatch(addCategory(category)))
  }
}

export function receiveCategories (categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}
