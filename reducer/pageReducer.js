const initialState = {
    loggedIn: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'update_page':
			return action.payload;
		default:
			return state;
	}
};
