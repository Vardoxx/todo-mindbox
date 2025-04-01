import { ChangeEventHandler, MouseEventHandler } from 'react'

export interface ITodoItemProps {
	task: string
	completed: boolean
	onToggle: ChangeEventHandler
	onDelete: MouseEventHandler
}
