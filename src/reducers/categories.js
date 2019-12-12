import { RECEIVE_CATEGORIES, ADD_CATEGORY } from '../actions/categories'

export default function categories (state = {}, action) {
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                ...action.categories
            }
            case ADD_CATEGORY :
                    const { category } = action
                  return {
                    ...state,
                    category,
                }
        default:
            return state
    }
}