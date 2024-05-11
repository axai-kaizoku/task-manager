import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: localStorage.getItem('tasks')
		? JSON.parse(localStorage.getItem('tasks'))
		: [
				{
					id: 'TASK-8782',
					description:
						"You can't compress the program without quantifying the open-source SSD pixel!",
					status: 'in progress',
					dueDate: 1715920927258,
					title: 'documentation',
					priority: 'medium',
				},
				{
					id: 'TASK-7878',
					description:
						'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
					status: 'pending',
					dueDate: 1715747909047,
					title: 'documentation',
					priority: 'low',
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
				{
					id: 'TASK-9360',
					description: 'Users facing downtime when updating their profile.',
					status: 'pending',
					title: 'bug',
					dueDate: 1715748119769,
					priority: 'high',
				},
		  ],
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.value.push(action.payload);
			saveTasksToLocalStorage(state.value);
		},
		editTask: (state, action) => {
			const index = state.value.findIndex(
				(task) => task.id === action.payload.id,
			);
			if (index !== -1) {
				state.value[index] = action.payload;
				saveTasksToLocalStorage(state.value);
			}
		},
		deleteTask: (state, action) => {
			const index = state.value.findIndex((task) => task.id === action.payload);
			if (index !== -1) {
				state.value.splice(index, 1);
				saveTasksToLocalStorage(state.value);
			}
		},
		markAsCompleted: (state, action) => {
			const index = state.value.findIndex(
				(task) => task.id === action.payload.id,
			);
			if (index !== -1) {
				state.value[index].status = action.payload.status;
				saveTasksToLocalStorage(state.value);
			}
		},
		filterTasks: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addTask, editTask, deleteTask, markAsCompleted, filterTasks } =
	taskSlice.actions;

export default taskSlice.reducer;

// Helper function to save tasks to localStorage
const saveTasksToLocalStorage = (tasks) => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};
