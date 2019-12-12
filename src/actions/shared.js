import { getInitialData } from '../utils/api'
import { receiveSuperUsers } from './superUsers'
import { receiveItems } from '../actions/items'
import { setAuthedUser } from '../actions/authedUser'
import { receiveCategories } from '../actions/categories'

const AUTH_ID = 'dettma1' 

export function handleInitialData () {
    return (dispatch) => {
      return getInitialData()
        .then(({ users, items, categories }) => {
          dispatch(receiveSuperUsers(users))
          dispatch(receiveItems(items))
          dispatch(receiveCategories(categories))
          dispatch(setAuthedUser(AUTH_ID))
        })
    }
  } 