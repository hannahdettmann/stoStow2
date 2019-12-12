export const RECEIVE_SUPER_USERS = 'RECEIVE_SUPER_USERS' 

export function receiveSuperUsers (super_users) {
    return {
        type: RECEIVE_SUPER_USERS,
        super_users
    }
}