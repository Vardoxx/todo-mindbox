import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { ITodoInputProps } from '../types/todo-input.types'

const TodoInput: FC<ITodoInputProps> = ({ onAddTodo }) => {
	const [inputValue, setInputValue] = useState<string>('')

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value)
	}

	function handleAdd() {
		if (inputValue.trim()) {
			onAddTodo(inputValue)
			setInputValue('')
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') handleAdd()
	}

	return (
		<div className='w-full flex gap-3'>
			<input
				type='text'
				placeholder='Что планируем?'
				value={inputValue}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				className='w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out'
			/>
			<button onClick={handleAdd} style={{ width: '120px' }}>
				Добавить
			</button>
		</div>
	)
}

export default TodoInput
