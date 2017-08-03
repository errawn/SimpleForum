import axios from 'axios';

export const getEmail = (email) => {
	return {
		type: 'GET_EMAIL',
		payload: email
	};
};

export const getPassword = (password) => {
	return {
		type: 'GET_PASSWORD',
		payload: password
	};
};

export const fetchUser = (email, password) => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_USER' });

		axios.post('http://localhost:8000/v1/sessions', {
			email, password
		})
			.then( data => {
				console.log(data.data);
				dispatch({ type: 'FETCH_USER_SUCCESS', payload: data.data.user})
			})
			.catch( error => { 
				console.log(error);
				dispatch({ type: 'FETCH_USER_FAILURE', payload: error})
			});
	};
};