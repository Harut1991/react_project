import axios from 'axios';

export const getPhotos = (albumId) =>  axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
