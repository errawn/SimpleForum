import {
 FETCH_POSTS, 
 FETCH_POSTS_SUCCESS, 
 FETCH_POSTS_FAIL 
} from '../actions/types';

const INITIAL_STATE = {
	posts: [],
	loading: false,
	error: []
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_POSTS: 
			return { ...state, loading: true }
		
		case FETCH_POSTS_SUCCESS:
			return { ...state, loading: false, posts: action.payload, error: '' }
		
		case FETCH_POSTS_FAIL: 
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
};