import { RECEIVE_ITEMS, ADD_ITEM } from '../actions/items'

export default function items (state = {}, action) {
    switch(action.type) {
        case RECEIVE_ITEMS:
            return {
                ...state,
                ...action.items
            }
            case ADD_ITEM :
                    const { item } = action
                  return {
                    ...state,
                    [action.item.id]: action.item,
                }
        default:
            return state
    }
}