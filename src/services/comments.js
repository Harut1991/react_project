import axios from 'axios';

export const getComments = (postId) =>  axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
