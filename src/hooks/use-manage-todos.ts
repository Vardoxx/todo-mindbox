import { useLocalStorage } from './use-local-storage'

export function useManageTodos() {
	const { todos, setTodos } = useLocalStorage('todos', [])

	function addTodo(task: string) {
		setTodos([...todos, { id: Date.now(), task, completed: false }])
	}

	function onToggle(id: number) {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	function onDelete(id: number) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	function deleteCompletedTodos() {
		setTodos(todos.filter(todo => !todo.completed))
	}

	function deleteAll() {
		if (window.confirm('Вы уверены?')) setTodos([])
	}

	return {
		todos,
		addTodo,
		onToggle,
		onDelete,
		deleteCompletedTodos,
		deleteAll,
	}
}
