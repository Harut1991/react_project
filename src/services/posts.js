import axios from 'axios';

export const getPosts = (user_id) =>  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
export const getPost = (postId) =>  axios.get(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);