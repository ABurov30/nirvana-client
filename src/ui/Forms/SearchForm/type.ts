import { FormEvent } from 'react'

import { IBlockButtonProps } from 'nirvana-uikit/dist/ui/Buttons/BlockButtons/BlockButton/types'

import { AutoCompleteProps } from '../../Inputs/AutoComplete/types'

export type FormProps = {
	fields: AutoCompleteProps['field'][]
	buttons: IBlockButtonProps[]
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
