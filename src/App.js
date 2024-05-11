import TaskList from './components/TaskList';
import TaskToolbar from './components/TaskToolbar';

export default function App() {
	return (
		<>
			<div className="flex flex-col flex-1 w-full h-full px-24 py-8 space-y-8">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Task Manager.</h2>
						<p className="text-muted-foreground">
							Here&apos;s a list of your tasks for this month!
						</p>
					</div>
					<div className="flex items-center space-x-4">
						<div className="flex items-center justify-center w-10 h-10 text-sm rounded-full ">
							<img
								src="https://github.com/axai-kaizoku.png"
								alt="profile"
								className="rounded-full"
								title="axai"
							/>
						</div>
					</div>
				</div>
				{/* Task Toolbar */}
				<TaskToolbar />

				{/* Task Table Component */}
				<TaskList />
			</div>
		</>
	);
}
