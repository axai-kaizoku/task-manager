import { formatDate } from '../utils';
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
} from '@headlessui/react';
import Modal from './ui/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteTask,
	editTask,
	markAsCompleted,
} from '../redux/slices/taskSlice';
import MenuIcon from './icons/menu';
import DropdownMenu from './ui/DropdownMenu';

export default function Task({ task }) {
	const { id, title, description, dueDate, status, priority } = task;

	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.task.value);

	const [editModal, setEditModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [error, setError] = useState('');

	// State for updating tasks
	const [selectedTask, setSelectedTask] = useState({});
	const [updateTitle, setUpdateTitle] = useState('');
	const [updateDescription, setUpdateDescription] = useState('');
	const [updateDate, setUpdateDate] = useState(0);
	const [updateStatus, setUpdateStatus] = useState('');
	const [updatePriority, setUpdatePriority] = useState('');

	// Functions

	// fetch task from store and set data for updating

	const getTask = (id) => {
		const findTask = tasks.filter((value) => value.id === id)[0];
		setUpdateTitle(findTask.title);
		setUpdateDescription(findTask.description);
		setUpdateDate(formatDate(findTask.dueDate));
		setUpdateStatus(findTask.status);
		setUpdatePriority(findTask.priority);
		setSelectedTask(findTask);
	};

	// Handle Status
	const handleStatus = (e, id) => {
		const updatedTask = {
			id: id,
			status: e.target.checked ? 'completed' : 'in progress',
		};
		dispatch(markAsCompleted(updatedTask));
	};

	// Handle Update
	const handleUpdate = (e) => {
		e.preventDefault();

		// Title, and description validation

		if (updateTitle.length < 3) {
			setError('Title must be at least 3 characters long.');
			return;
		}

		if (updateDescription.length < 10) {
			setError('Description must be at least 10 characters long.');
			return;
		}

		// Date validation

		const date = new Date(updateDate);
		const newDueDate = date.getTime();

		const current = Date.now();

		if (current > newDueDate) {
			setError('Due date should be greater than today');
			return;
		}

		const updatedTask = {
			id: selectedTask.id,
			title: updateTitle,
			description: updateDescription,
			dueDate: newDueDate,
			status: updateStatus,
			priority: updatePriority,
		};
		setError('');
		dispatch(editTask(updatedTask));
		setEditModal(false);
	};

	// Handle Delete
	const handleDelete = () => {
		dispatch(deleteTask(selectedTask.id));
		setDeleteModal(false);
	};

	return (
		<>
			{/* Individual Task */}
			<tr className="border-b transition-colors hover:bg-slate-50/50 data-[state=selected]:bg-slate-50">
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
					<input
						type="checkbox"
						name=""
						id=""
						onChange={(e) => handleStatus(e, id)}
					/>
				</td>
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm">
					{id}
				</td>
				<td className="p-4 align-middle items-center font-medium text-sm [&:has([role=checkbox])]:pr-0 flex gap-2">
					<div className="py-1 px-1.5 text-xs border capitalize rounded-2xl w-fit">
						{title}
					</div>
					<div className="text-slate-700 whitespace-nowrap">{description}</div>
				</td>
				<td className="p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0">
					{formatDate(dueDate)}
				</td>
				<td className="p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 capitalize">
					{status}
				</td>
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 capitalize">
					{priority}
				</td>
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
					<DropdownMenu
						position="bottom end"
						title={<MenuIcon />}>
						<MenuItem>
							<button
								onClick={() => {
									setEditModal(true);
									getTask(id);
								}}>
								Edit
							</button>
						</MenuItem>
						<MenuItem>
							<button
								onClick={() => {
									setDeleteModal(true);
									getTask(id);
								}}>
								Delete
							</button>
						</MenuItem>
					</DropdownMenu>
				</td>
			</tr>

			{/* Edit Modal */}

			<Modal
				isOpen={editModal}
				closeModal={() => setEditModal(false)}>
				<div className="flex flex-col items-center justify-center mx-auto lg:py-0">
					<div className="w-full md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleUpdate}>
								<div>
									<label
										htmlFor="title"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Title
									</label>
									<input
										type="text"
										name="title"
										id="title"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Documentation"
										value={updateTitle}
										onChange={(e) => setUpdateTitle(e.target.value)}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="description"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Description
									</label>
									<input
										type="text"
										name="description"
										id="description"
										placeholder="New feature added!"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={updateDescription}
										onChange={(e) => setUpdateDescription(e.target.value)}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="date"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Due Date
									</label>
									<input
										type="date"
										name="date"
										id="date"
										placeholder="New feature added!"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={updateDate}
										onChange={(e) => setUpdateDate(e.target.value)}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="status"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Status
									</label>
									<select
										type="text"
										name="status"
										id="status"
										placeholder="New feature added!"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
										value={updateStatus}
										onChange={(e) => setUpdateStatus(e.target.value)}>
										<option value="pending">Pending</option>
										<option value="in progress">In Progress</option>
										<option value="completed">Completed</option>
									</select>
								</div>
								<div>
									<label
										htmlFor="priority"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Priority
									</label>
									<select
										type="text"
										name="priority"
										id="priority"
										placeholder="New feature added!"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
										value={updatePriority}
										onChange={(e) => setUpdatePriority(e.target.value)}>
										<option value="low">Low</option>
										<option value="medium">Medium</option>
										<option value="high">High</option>
									</select>
								</div>
								<div>
									<span className="text-red-500">{error}</span>
								</div>
								<button
									type="submit"
									className="w-full border  text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Update
								</button>
							</form>
						</div>
					</div>
				</div>
			</Modal>

			{/* Delete Modal */}

			<Modal
				isOpen={deleteModal}
				closeModal={() => setDeleteModal(false)}>
				<div className="flex w-full">
					<h3 className="text-2xl font-semibold">Delete Task</h3>
				</div>
				<div className="flex flex-col gap-2.5">
					<p className="py-8 text-sm text-muted-foreground">
						Are you absolutely sure? This cannot be undone.
					</p>
					<div className="flex justify-end gap-5">
						<button
							className="p-2 border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground"
							onClick={() => setDeleteModal(false)}>
							Cancel
						</button>
						<button
							onClick={handleDelete}
							className="p-2 border rounded-md bg-slate-900 text-slate-50 hover:bg-slate-900/80">
							Continue
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
}
