import action_types from './action_types'

export const addUsers = (users) => {
    return  { 
        type: action_types.ADD_USERS,
        users: users
    }
};

export const addUser = (user) => {
    return  { 
        type: action_types.ADD_USER,
        user: user
    }
};