import action_types from '../actions/action_types';

const initialState = {
    users: [],
    user: null
};
export default function UserReducer(state = initialState, action) {

    switch(action.type) {
      case action_types.ADD_USERS:
        return {
            state,
            users: action.users
        };
      case action_types.ADD_USER:
        return {
            state,
            user: action.user
        };  
      default:
        return state;
    }
  }