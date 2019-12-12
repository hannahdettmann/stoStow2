import { RECEIVE_SUPER_USERS } from '../actions/superUsers'

export default function superUsers (state = {}, action) {
    switch(action.type) {
        case RECEIVE_SUPER_USERS :
            return {
                ...state,
                ...action.superUsers
            }
        default :
            return state
    }
}