import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit"

export interface SelectProps {
	label: string
	options: Option[]
	value: string
	onChange: (value: string) => void
	dispatch: ThunkDispatch<{}, undefined, UnknownAction>
}

interface Option {
	label: string
	value: string
}
