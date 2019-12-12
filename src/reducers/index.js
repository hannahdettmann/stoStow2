import { combineReducers } from 'redux'
import authedUser from './authedUser'
import items from './items'
import categories from './categories'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    items,
    categories,
    loadingBar: loadingBarReducer
})