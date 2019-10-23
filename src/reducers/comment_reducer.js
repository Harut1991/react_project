import action_types from '../actions/action_types';

const initialState = {
    comments: []
};
export default function CommentReducer(state = initialState, action) {

    switch(action.type) {
      case action_types.ADD_COMMENTS:
        return {
            state,
            comments: action.comments
        };  
      default:
        return state;
    }
  }