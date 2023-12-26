import { IBlockButtonProps } from 'radio-app-uikit/dist/ui/Buttons/BlockButtons/BlockButton/types'
import { AutoCompleteProps } from '../../Inputs/AutoComplete/types'
import { FormEvent } from 'react'
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

export type FormProps = {
	fields: AutoCompleteProps['field'][]
	buttons: IBlockButtonProps[]
	onSubmit: (
		e: FormEvent<HTMLFormElement>,
		dispatch: ThunkDispatch<{}, undefined, UnknownAction>
	) => void
}
