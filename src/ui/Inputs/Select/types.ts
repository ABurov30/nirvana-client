import {
	ActionCreatorWithPayload,
	ThunkDispatch,
	UnknownAction
} from '@reduxjs/toolkit'

import { Theme } from '../../../entities/App/types'

export interface SelectProps {
	label: string
	options: Option[]
	value: string
	onChange:
		| ActionCreatorWithPayload<Theme, 'app/changeTheme'>
		| ((value: string) => void)
	dispatch?: ThunkDispatch<{}, undefined, UnknownAction>
}

interface Option {
	label: string
	value: string
}
