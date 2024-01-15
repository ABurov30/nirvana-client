import { IBlockButtonProps } from 'nirvana-uikit/dist/ui/Buttons/BlockButtons/BlockButton/types'
import { AutoCompleteProps } from '../../Inputs/AutoComplete/types'
import { FormEvent } from 'react'

export type FormProps = {
	fields: AutoCompleteProps['field'][]
	buttons: IBlockButtonProps[]
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
