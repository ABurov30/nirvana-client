export interface AutoCompleteProps {
	field: {
		label?: string
		name: string
		value: string
		onChange: (value: string) => void
		path: string
		options: string[]
		setOptions: (options: string[]) => void
		required?: boolean
	}
}
