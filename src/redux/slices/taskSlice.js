import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'task',
	initialState: {
		value: [],
	},
	reducers: {
		addToTasks: (state, action) => {
			state.value.push(action.payload);
		},
		resetTasks: (state, action) => {
			state.value = [];
		},
	},
});

export const { addToTasks, resetTasks } = taskSlice.actions;

export default taskSlice.reducer;
