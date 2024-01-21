import { Dispatch, SetStateAction } from 'react'

export interface AutoCompleteProps {
	field: {
		label: string
		name: string
		value: string
		onChange: Dispatch<SetStateAction<string>>
		path: string
		options: string[]
		setOptions: (options: string[]) => void
		required?: boolean
	}
}
