import action_types from '../actions/action_types';

const initialState = {
    photos: []
};
export default function PhotoReducer(state = initialState, action) {

    switch(action.type) {
      case action_types.ADD_PHOTOS:
        return {
            state,
            photos: action.photos
        };  
      default:
        return state;
    }
  }