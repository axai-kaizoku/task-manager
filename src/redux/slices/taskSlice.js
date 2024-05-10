import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'task',
	initialState: {
		value: [
			{
				id: 'TASK-8782',
				description:
					"You can't compress the program without quantifying the open-source SSD pixel!",
				status: 'in progress',
				dueDate: 1715506162153,
				title: 'documentation',
				priority: 'medium',
			},
			{
				id: 'TASK-7878',
				description:
					'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
				status: 'pending',
				dueDate: 1715506162153,
				title: 'documentation',
				priority: 'medium',
			},
			{
				id: 'TASK-7839',
				description: 'We need to bypass the neural TCP card!',
				status: 'completed',
				dueDate: 1715506162153,
				title: 'bug',
				priority: 'high',
			},
			{
				id: 'TASK-5562',
				description:
					'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
				status: 'pending',
				title: 'feature',
				dueDate: 1715506162153,
				priority: 'medium',
			},
		],
	},
	reducers: {
		addTask: (state, action) => {
			state.value.push(action.payload);
		},
		editTask: (state, action) => {
			const index = state.value.findIndex(
				(task) => task.id === action.payload.id,
			);
			if (index !== -1) {
				state.value[index] = action.payload;
			}
		},
		deleteTask: (state, action) => {
			const index = state.value.findIndex((task) => task.id === action.payload);
			if (index !== -1) {
				state.value.splice(index, 1);
			}
		},
		markAsCompleted: (state, action) => {
			state.value.push(action.payload);
		},
	},
});

export const { addTask, editTask, deleteTask, markAsCompleted } =
	taskSlice.actions;

export default taskSlice.reducer;
