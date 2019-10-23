import axios from 'axios';

export const getAlbums = (user_id) =>  axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${user_id}`);
export const getAlbum = (postId) =>  axios.get(`https://jsonplaceholder.typicode.com/albums?id=${postId}`);