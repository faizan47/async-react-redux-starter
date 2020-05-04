import jsonPlaceholder from '../jsonPlaceholder';

// export const fetchPosts = () => async (dispatch) => {
// 	console.log('I HAPPEN');
// 	const response = await JSONplaceholder.get('/posts');
// 	dispatch({ type: 'FETCH_POSTS', payload: response.data });
// };

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
