import action_types from '../actions/action_types';

const initialState = {
    posts: [],
    post: null
};
export default function PostReducer(state = initialState, action) {

    switch(action.type) {
      case action_types.ADD_POSTS:
        return {
            state,
            posts: action.posts
        }; 
      case action_types.ADD_POST:
        return {
            state,
            post: action.post
        }; 
      default:
        return state;
    }
  }