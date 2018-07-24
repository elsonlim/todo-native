const initialState = {
    todoItems: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'update_todos':
			return {
                todoItems: action.payload
            };
		default:
			return state;
	}
};
