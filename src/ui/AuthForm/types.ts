import { ChangeEventHandler } from 'react'

export interface IFormFields {
	placeholder: string
	name: string
	type?: string
	required: boolean
	value?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface IFormButtons {
	text: string
	type?: "submit" | "reset" | "button"
	onClick?: () => void
}
