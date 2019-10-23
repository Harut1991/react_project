import action_types from './action_types'

export const addAlbums = (albums) => {
    return  { 
        type: action_types.ADD_ALBUMS,
        albums: albums
    }
};
export const addAlbum = (album) => {
    return  { 
        type: action_types.ADD_ALBUM,
        album: album
    }
};
