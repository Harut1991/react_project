import action_types from './action_types'

export const addComments = (comments) => {
    return  { 
        type: action_types.ADD_COMMENTS,
        comments: comments
    }
};