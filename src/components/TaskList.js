import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import DropdownMenu from './ui/DropdownMenu';
import { MenuItem } from '@headlessui/react';
import { filterTasks } from '../redux/slices/taskSlice';
import ChevronUpDownIcon from './icons/chevron-up-down';
import ArrowUpIcon from './icons/arrow-up';
import ArrowDownIcon from './icons/arrow-down';

export default function TaskList() {
	const data = useSelector((state) => state.task.value);
	const dispatch = useDispatch();

	// Sorting
	// Due Date sorting

	const handleDueDateAsc = () => {
		dispatch(
			filterTasks(
				[...data].sort((a, b) => {
					return a.dueDate > b.dueDate ? 1 : -1;
				}),
			),
		);
	};

	const handleDueDateDsc = () => {
		dispatch(
			filterTasks(
				[...data].sort((a, b) => {
					return a.dueDate < b.dueDate ? 1 : -1;
				}),
			),
		);
	};

	// Status sorting

	const handleStatusAsc = () => {
		dispatch(
			filterTasks(
				[...data].sort((a, b) => {
					return a.status < b.status ? 1 : -1;
				}),
			),
		);
	};

	const handleStatusDsc = () => {
		dispatch(
			filterTasks(
				[...data].sort((a, b) => {
					return a.status > b.status ? 1 : -1;
				}),
			),
		);
	};

	// Priority Sorting

	const priorityValues = {
		low: 0,
		medium: 1,
		high: 2,
	};

	const handlePriorityAsc = () => {
		dispatch(
			filterTasks(
				[...data].sort((a, b) => {
					return priorityValues[a.priority] > priorityValues[b.priority]
						? 1
						: -1;
				}),
			),
		);
	};

	const handlePriorityDsc = () => {
		dispatch(
			filterTasks(
				[...data].sort((a, b) => {
					return priorityValues[a.priority] < priorityValues[b.priority]
						? 1
						: -1;
				}),
			),
		);
	};

	return (
		<>
			{/* Date Table */}
			<div className="relative w-full overflow-auto border rounded-md shadow-md">
				<table className="w-full text-sm caption-bottom">
					{/* Table Head row */}
					<thead className="[&_tr]:border-b">
						<tr className="border-b w-full transition-colors hover:bg-slate-50/50 data-[state=selected]:bg-slate-50">
							<th className="h-12 w-2 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								<input
									type="checkbox"
									name=""
									id=""
									aria-label="Select all"
								/>
							</th>
							<th className="h-12 w-32 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								Task
							</th>
							<th className="h-12 w-[740px] px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								Title & Description
							</th>
							<th className="h-12 w-32 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								<DropdownMenu
									position="bottom"
									title="Due Date"
									icon={<ChevronUpDownIcon />}>
									<MenuItem className="flex rounded-md data-[focus]:bg-gray-400/10 justify-center">
										<button
											onClick={handleDueDateAsc}
											className="flex items-center gap-2">
											Asc <ArrowUpIcon />
										</button>
									</MenuItem>
									<MenuItem className="flex rounded-md data-[focus]:bg-gray-400/10 justify-center">
										<button
											onClick={handleDueDateDsc}
											className="flex items-center gap-2">
											Dsc <ArrowDownIcon />
										</button>
									</MenuItem>
								</DropdownMenu>
							</th>
							<th className="h-12 w-32 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								<DropdownMenu
									position="bottom"
									title="Status"
									icon={<ChevronUpDownIcon />}>
									<MenuItem className="flex rounded-md data-[focus]:bg-gray-400/10 justify-center">
										<button
											onClick={handleStatusAsc}
											className="flex items-center gap-2">
											Asc <ArrowUpIcon />
										</button>
									</MenuItem>
									<MenuItem className="flex rounded-md data-[focus]:bg-gray-400/10 justify-center">
										<button
											onClick={handleStatusDsc}
											className="flex items-center gap-2">
											Dsc <ArrowDownIcon />
										</button>
									</MenuItem>
								</DropdownMenu>
							</th>
							<th className="h-12 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								<DropdownMenu
									position="bottom"
									title="Priority"
									icon={<ChevronUpDownIcon />}>
									<MenuItem className="flex rounded-md data-[focus]:bg-gray-400/10 justify-center">
										<button
											onClick={handlePriorityAsc}
											className="flex items-center gap-2">
											Asc <ArrowUpIcon />
										</button>
									</MenuItem>
									<MenuItem className="flex rounded-md data-[focus]:bg-gray-400/10 justify-center">
										<button
											onClick={handlePriorityDsc}
											className="flex items-center gap-2">
											Dsc <ArrowDownIcon />
										</button>
									</MenuItem>
								</DropdownMenu>
							</th>
							<th className="h-12 w-4 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0"></th>
						</tr>
					</thead>
					{/* Table Data Rows */}
					<tbody className="[&_tr:last-child]:border-0">
						{data.map((task, i) => (
							<Task
								key={i}
								task={task}
							/>
						))}
						{false && (
							<tr className="border-b transition-colors hover:bg-slate-50/50 data-[state=selected]:bg-slate-50">
								<td
									colSpan={5}
									className="h-24 text-center p-4 align-middle [&:has([role=checkbox])]:pr-0">
									No results
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</>
	);
}
