import {
 FETCH_POSTS, 
 FETCH_POSTS_SUCCESS 
} from './types';

import axios from 'axios';

export const fetchPosts = () => {
	return (dispatch) => {

		dispatch({ type: FETCH_POSTS })

		axios.get('http://localhost:8000/v1/posts')
			.then(data => {
				console.log(data.data.posts);
				dispatch({ type: FETCH_POSTS_SUCCESS, payload: data.data.posts });
			})
			.catch(error => {
				console.log(error);
			})
	};
};