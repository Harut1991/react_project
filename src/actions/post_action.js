import action_types from './action_types'

export const addPosts = (posts) => {
    return  { 
        type: action_types.ADD_POSTS,
        posts: posts
    }
};

export const addPost = (post) => {
    return  { 
        type: action_types.ADD_POST,
        post: post
    }
};