import { FC } from 'react'
import { BiTrash } from 'react-icons/bi'
import { ITodoItemProps } from '../types/todo-item.types'

const TodoItem: FC<ITodoItemProps> = ({
	completed,
	task,
	onToggle,
	onDelete,
}) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex gap-1.5 items-center'>
				<input
					type='checkbox'
					onChange={onToggle}
					checked={completed}
					className='h-4 w-4 text-blue-500'
				/>{' '}
				<span
					className={`text-gray-700 ${
						completed ? 'line-through text-gray-400' : ''
					}`}
				>
					{task}
				</span>
			</div>

			<BiTrash className='text-xl text-red-500' onClick={onDelete} />
		</div>
	)
}

export default TodoItem
