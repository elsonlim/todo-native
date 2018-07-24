export const updateIsLogin = isLogin => ({
	type: 'update_page',
	payload: isLogin,
});

export const updateTodolist = todos => ({
	type: 'update_todos',
	payload: todos,
});

