import JSONplaceholder from '../jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
	const response = await JSONplaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);

const _fetchUser = async (userId, dispatch) => {
	const response = await JSONplaceholder.get(`/users/${userId}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	const posts = getState().posts;
	let userIds = [];
	posts.forEach(({ userId }) => {
		if (!userIds.includes(userId)) {
			userIds.push(userId);
		}
	});
	userIds.forEach((id) => dispatch(fetchUser(id)));
};
