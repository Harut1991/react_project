import action_types from '../actions/action_types';

const initialState = {
    albums: [],
    albums: null
};
export default function AlbumsReducer(state = initialState, action) {

    switch(action.type) {
      case action_types.ADD_ALBUMS:
        return {
            state,
            albums: action.albums
        };  
      case action_types.ADD_ALBUM:
        return {
            state,
            album: action.album
        };    
      default:
        return state;
    }
  }