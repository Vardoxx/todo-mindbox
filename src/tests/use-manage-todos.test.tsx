import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useManageTodos } from '../hooks/use-manage-todos'

describe('useManageTodos', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		localStorage.clear()
	})

	it('добавление задачи', () => {
		const { result } = renderHook(() => useManageTodos())

		act(() => {
			result.current.addTodo('Test Task')
		})

		expect(result.current.todos).toHaveLength(1)
		expect(result.current.todos[0].task).toBe('Test Task')
	})

	it('перенос задачи в "выполненные"', () => {
		const { result } = renderHook(() => useManageTodos())

		act(() => {
			result.current.addTodo('Test Task')
		})

		const todoId = result.current.todos[0].id
		act(() => {
			result.current.onToggle(todoId)
		})

		expect(result.current.todos[0].completed).toBe(true)
	})

	it('удаление задачи', () => {
		const { result } = renderHook(() => useManageTodos())

		act(() => {
			result.current.addTodo('Test Task')
		})

		const todoId = result.current.todos[0].id
		act(() => {
			result.current.onDelete(todoId)
		})

		expect(result.current.todos).toHaveLength(0)
	})

	it('удаление выполненных задач', () => {
		const { result } = renderHook(() => useManageTodos())

		act(() => {
			result.current.addTodo('Task 1')
			result.current.addTodo('Task 2')
		})

		const todoId = result.current.todos[0].id

		act(() => {
			result.current.onToggle(todoId)
			result.current.deleteCompletedTodos()
		})

		expect(result.current.todos).toHaveLength(1)
	})

	it('удаление всех задач', () => {
		globalThis.confirm = vi.fn(() => true)

		const { result } = renderHook(() => useManageTodos())

		act(() => {
			result.current.addTodo('Task 1')
			result.current.addTodo('Task 2')
		})

		act(() => {
			result.current.deleteAll()
		})

		expect(result.current.todos).toHaveLength(0)
	})
})
