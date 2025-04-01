import { FC } from 'react'
import { todoListBlock } from '../constants/todo-list-bocks.constants'
import { ITodoListProps } from '../types/todo-list.types'
import TodoItem from './todo-item'

const TodoList: FC<ITodoListProps> = ({ todos, onDelete, onToggle }) => {
	const activeTodos = todos.filter(e => !e.completed)
	const completedTodos = todos.filter(e => e.completed)

	return (
		<>
			{todos.length > 0 && (
				<div className='w-full flex flex-col gap-4'>
					{todoListBlock.map(category => (
						<div
							key={category}
							className='flex w-full flex-col border-1 border-blue-500 rounded-xl p-4'
						>
							<div className='flex w-full items-center justify-center text-2xl text-gray-400'>
								<h1>{category}</h1>
							</div>

							{category === 'Все' &&
								todos.map(e => (
									<TodoItem
										key={e.id}
										task={e.task}
										completed={e.completed}
										onDelete={() => onDelete(e.id)}
										onToggle={() => onToggle(e.id)}
									/>
								))}

							{category === 'Активные' &&
								activeTodos.map(e => (
									<TodoItem
										key={e.id}
										task={e.task}
										completed={e.completed}
										onDelete={() => onDelete(e.id)}
										onToggle={() => onToggle(e.id)}
									/>
								))}

							{category === 'Выполненные' &&
								completedTodos.map(e => (
									<TodoItem
										key={e.id}
										task={e.task}
										completed={e.completed}
										onDelete={() => onDelete(e.id)}
										onToggle={() => onToggle(e.id)}
									/>
								))}
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default TodoList
