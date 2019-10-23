import action_types from './action_types'

export const addPhotos = (photos) => {
    return  { 
        type: action_types.ADD_PHOTOS,
        photos: photos
    }
};