export default function App() {
	return (
		<>
			<div className="hidden h-full flex-1 flex-col space-y-8 py-8 px-24 md:flex">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
						<p className="text-muted-foreground">
							Here&apos;s a list of your tasks for this month!
						</p>
					</div>
					<div className="flex items-center space-x-4">AKSHAY YELLE</div>
				</div>

				{/* Table Component */}
				<div className="relative w-full overflow-auto rounded-md border">
					<table className="w-full caption-bottom text-sm">
						<thead className="[&_tr]:border-b">
							<tr className="border-b transition-colors hover:bg-slate-50/50 data-[state=selected]:bg-slate-50">
								<th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
									<input
										type="checkbox"
										name=""
										id=""
									/>
								</th>
								<th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
									Task
								</th>
								<th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
									Title
								</th>
								<th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
									Due Date
								</th>
								<th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
									Status
								</th>
								<th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
									Priority
								</th>
								<th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"></th>
							</tr>
						</thead>
						<tbody className="[&_tr:last-child]:border-0">
							<tr className="border-b transition-colors hover:bg-slate-50/50 data-[state=selected]:bg-slate-50">
								<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
									<input
										type="checkbox"
										name=""
										id=""
									/>
								</td>
								<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
									TASK-9836
								</td>
								<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
									Documentation
								</td>
								<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
									17/05/2024
								</td>
								<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
									In progress
								</td>
								<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
									High
								</td>
								<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
									<button className="align-text-bottom">...</button>
								</td>
							</tr>

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
			</div>
		</>
	);
}
