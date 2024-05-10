import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';
import Modal from './ui/Modal';
import { generateNumericUUID } from '../utils';

export default function TaskToolbar() {
	const dispatch = useDispatch();
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const title = e.target[0].value.trim().toLowerCase();
		const description = e.target[1].value;
		const inputDate = e.target[2].value;
		const status = e.target[3].value;
		const priority = e.target[4].value;
		const numId = generateNumericUUID();
		const id = `TASK-${numId}`;

		// Title, and description validation

		if (title.length < 3) {
			setError('Title must be at least 3 characters long.');
			return;
		}

		if (description.length < 10) {
			setError('Description must be at least 10 characters long.');
			return;
		}

		// Due Date validation

		const date = new Date(inputDate);
		const dueDate = date.getTime();

		const current = Date.now();

		if (current > dueDate) {
			setError('Due date should be greater than today');
			return;
		}

		setError('');

		const task = {
			id,
			title,
			description,
			dueDate,
			status,
			priority,
		};
		dispatch(addTask(task));

		e.target.reset();
		closeModal();
	};
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-end flex-1 px-4 space-x-2">
					<button
						onClick={openModal}
						className="px-2 py-1.5 text-sm border rounded-md">
						Add New Task
					</button>
				</div>
			</div>

			{/* Add new task form*/}

			<Modal
				isOpen={isOpen}
				closeModal={closeModal}>
				<div className="flex flex-col items-center justify-center mx-auto lg:py-0">
					<div className="w-full md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}>
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
										disabled>
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
										required>
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
									Create
								</button>
							</form>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
