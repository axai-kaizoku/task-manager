import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import tasks from '../data/tasks.json';

export default function TaskList() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.task.value);

	return (
		<>
			<div className="relative w-full overflow-auto border rounded-md shadow-md">
				<table className="w-full text-sm caption-bottom">
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
								Due Date
							</th>
							<th className="h-12 w-32 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								Status
							</th>
							<th className="h-12 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0">
								Priority
							</th>
							<th className="h-12 w-4 px-4 text-left align-middle font-medium text-slate-700/70 [&:has([role=checkbox])]:pr-0"></th>
						</tr>
					</thead>
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
