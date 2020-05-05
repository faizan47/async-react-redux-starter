import JSONplaceholder from '../jsonPlaceholder';
import { memoize } from 'lodash';
export const fetchPosts = () => async (dispatch) => {
	const response = await JSONplaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (userId) => async (dispatch) => {
	const response = await JSONplaceholder.get(`/users/${userId}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
};
console.log(memoize);
