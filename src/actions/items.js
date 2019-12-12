import { saveItem } from '../utils/api'

export const RECEIVE_ITEMS = 'RECIEVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'

function addItem (item) {
  return {
    type: ADD_ITEM,
    item,
  }
}

export function handleAddItem (owner, name, count, location, categories, isFlammable) {
  return (dispatch, getState) => {
     return saveItem({
      owner,
      name,
      count,
      location,
      categories,
      isFlammable,
    })
      .then((item) => dispatch(addItem(item)))
  }
}

export function receiveItems (items) {
    return {
        type: RECEIVE_ITEMS,
        items
    }
}
