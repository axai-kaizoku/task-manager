import { formatDate } from '../utils';

export default function Task({ task }) {
	const { id, title, description, dueDate, status, priority } = task;
	return (
		<>
			<tr className="border-b transition-colors hover:bg-slate-50/50 data-[state=selected]:bg-slate-50">
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
					<input
						type="checkbox"
						name=""
						id=""
					/>
				</td>
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm">
					{id}
				</td>
				<td className="p-4 align-middle font-medium text-sm [&:has([role=checkbox])]:pr-0 flex gap-2">
					<div className="py-1 px-1.5 text-xs border capitalize rounded-2xl w-fit">
						{title}
					</div>
					<div className="text-slate-700 whitespace-nowrap">{description}</div>
				</td>
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
					{formatDate(dueDate)}
				</td>
				<td className="p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 capitalize">
					{status}
				</td>
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 capitalize">
					{priority}
				</td>
				<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.4}
							stroke="currentColor"
							className="w-5 h-5">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
							/>
						</svg>
					</button>
				</td>
			</tr>
		</>
	);
}
