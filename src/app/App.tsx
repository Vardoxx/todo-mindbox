import TodoInput from '../components/todo-input'
import TodoList from '../components/todo-list'
import { useManageTodos } from '../hooks/use-manage-todos'

function App() {
	const {
		todos,
		addTodo,
		onToggle,
		onDelete,
		deleteCompletedTodos,
		deleteAll,
	} = useManageTodos()

	return (
		<div className='wrapper flex justify-center flex-col gap-4'>
			<div className='w-full flex items-center justify-center text-gray-400 text-7xl font-extralight opacity-70'>
				<h1>todos</h1>
			</div>
			<TodoInput onAddTodo={addTodo} />

			<TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />

			{todos.length > 0 && (
				<>
					<div className='flex w-full gap-2.5'>
						<button
							onClick={() => deleteCompletedTodos()}
							disabled={!todos.find(todo => todo.completed) ? true : false}
							style={{ backgroundColor: '#f56565' }}
						>
							Удалить выполненные
						</button>

						<button
							onClick={() => deleteAll()}
							style={{ backgroundColor: '#c53030' }}
						>
							Удалить всё
						</button>
					</div>

					<div className='flex flex-col'>
						<h1>Кол-во:</h1>
						<p>Всего: {todos.length}</p>
						<p>Активные: {todos.filter(e => !e.completed).length}</p>
						<p>Выполненные: {todos.filter(e => e.completed).length}</p>
					</div>
				</>
			)}
		</div>
	)
}

export default App
