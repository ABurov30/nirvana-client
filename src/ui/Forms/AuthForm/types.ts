import { ChangeEventHandler, FormEventHandler } from 'react'

export interface IFormFields {
	placeholder?: string
	name: string
	type?: string
	label?: string
	options?: string[]
	required?: boolean
	value?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface IFormButtons {
	text: string
	type?: 'submit' | 'reset' | 'button'
	onClick?: () => void
}

export interface IFormProps {
	fields: IFormFields[]
	buttons: IFormButtons[]
	onSubmit: FormEventHandler<HTMLFormElement>
}
