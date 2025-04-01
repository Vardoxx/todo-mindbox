import { ITodo } from './todo.types'

export interface ITodoListProps {
	todos: ITodo[]
	onToggle: (id: number) => void
	onDelete: (id: number) => void
}
