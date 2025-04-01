import { useEffect, useState } from 'react'
import { ITodo } from '../types/todo.types'

function getStorageValue(key: string, defaultValue: ITodo[]) {
	if (typeof window === 'undefined') return defaultValue

	const saved = localStorage.getItem(key)
	const initial = saved ? JSON.parse(saved) : defaultValue
	return initial
}

export function useLocalStorage(key: string, defaultValue: ITodo[]) {
	const [todos, setTodos] = useState<ITodo[]>(() => {
		return getStorageValue(key, defaultValue)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(todos))
	}, [key, todos])

	return { todos, setTodos }
}
